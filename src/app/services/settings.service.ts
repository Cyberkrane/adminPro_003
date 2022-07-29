import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private linkTheme = document.querySelector('#theme')

  constructor() {

    const url = localStorage.getItem('theme') || `./assets/css/colors/red-dark.css`;
    this.linkTheme?.setAttribute('href', url)
  }

  changeTheme(theme: string) {

    const url = `./assets/css/colors/${theme}.css`

    this.linkTheme?.setAttribute('href', url)

    localStorage.setItem('theme', url)

    console.log(this.linkTheme)

    this.checkCurrentTheme();
  }

  checkCurrentTheme() {

    const CurrentTheme: NodeListOf<Element> | undefined = document.querySelectorAll('.selector');

    CurrentTheme?.forEach((theme) => {
      theme.classList.remove('working')

      const btnTheme = theme.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentLink = this.linkTheme?.getAttribute('href');

      if (btnThemeUrl === currentLink) {
        theme.classList.add('working')
      }
    })

  }
}
