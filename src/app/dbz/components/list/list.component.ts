import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Character } from '../../interfaces/character.interface'

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  @Input()
  public characters: Character[] = [
    { name: 'Goku', power: 1500 },
    { name: 'Vegeta', power: 800 }
  ]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter()

  public removeCharacter (id: string): void {
    this.onDelete.emit(id)
  }
}
