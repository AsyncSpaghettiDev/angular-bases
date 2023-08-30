import { Component, EventEmitter, Output } from '@angular/core'
import { Character } from '../../interfaces/character.interface'

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
})
export class AddCharacterComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter()
  public newCharacter: Character = {
    name: '',
    power: 0,
  }

  emitCharacter (): void {
    if (this.newCharacter.name.trim().length === 0) return alert('Name is required')

    this.onNewCharacter.emit(this.newCharacter)

    this.newCharacter = {
      name: '',
      power: 0,
    }
  }
}
