import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class DefinitionsService {
  userDefinitionSession = this.getDefinitions()

  setDefinitionDefault(language: string, theme: string): void {
    sessionStorage.setItem(
      'user-definitions',
      JSON.stringify({
        language: language,
        theme: theme,
      })
    )
  }

  updateDefinitionItem(defKey: string, defValue: any): void {
    if (this.userDefinitionSession) {
      let newSession = { ...this.userDefinitionSession, [defKey]: defValue }
      sessionStorage.setItem('user-definitions', JSON.stringify(newSession))
    }
  }

  getDefinitions(): any {
    const definitionSession = sessionStorage.getItem(
      'user-definitions'
    ) as string
    return JSON.parse(definitionSession)
  }
}
