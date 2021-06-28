import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  contentElements:Array<string>;
  listOfIds: Array<string>;
  currentId:string = "-1";
  // Editor functionality
  editMode: boolean;
  editorClick: boolean;
  editContent: boolean;

  constructor() {
    // Settings: Disable EditModer
    this.editMode = true;
    this.editContent = false;
    
    this.listOfIds = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6"
    ];
  }

  ngOnInit(): void {
  }

  /// <summary>
  // STEP 1.
  // Switch editor ON
  /// </summary>
  onCreateEditMode() {
    this.editMode = true;
  }

  /// <summary>
  // STEP 2.
  // When clicking on element get Id and set globally for editing
  /// </summary>
  EditorClickController(event: Event) {
    // 1) EditMode must be enabled to run
    if (this.editMode) {
      // 1.1) Content switch allows editor css display none to block
      this.editContent = true;
      // 1.2) Access content id for editing
      var id = (<HTMLInputElement>event.target).id;
      // 1.3) Set global editor Id to be shared throughout application 
      this.currentId = id;

      // Debug
      console.log("Element Id " + id);
    }
  }

  /// <summary>
  // STEP 3.
  // Using the global Id element use 2 way binding within editor
  /// </summary>
  onUpdateContent(event: Event) {
    // 1) Access DOM get id which is defined globally
    var accessDOM = document.getElementById(this.currentId);

    // 2) Long as there's a value and the element isn't null
    if ((<HTMLInputElement>event.target).value !== (undefined || null) || (<HTMLInputElement>event.target).value.length < 1) {
      // 2.1) Update DOM Text for every input in editor
      accessDOM.textContent = (<HTMLInputElement>event.target).value;
    }

    console.log("Editing ID: " + accessDOM.id);
  }

}
