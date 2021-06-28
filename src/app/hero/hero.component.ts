import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  listOfIds: Array<string>;
  editMode: boolean;
  editorClick: boolean;
  editContent: boolean;
  currentId:string = "1";
  cssStyle: string;

  // Text
  title: string = "Your all in one online solution";
  subtitle: string = "Fast, secure and afforable solution for you. No need for the typicle blog only capible websites. Here, your website is capible of anything.";
  primaryBtnText: string = "Read More";
  secondaryBtnText: string = "Try Now";

  selectedIndex: string;

  constructor() {
    // Settings: Disable EditModer
    this.editMode = false;
    this.editContent = false;
    
    this.listOfIds = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6"
    ];

    // Hero Carosel
    // setTimeout(() => {
    //   this.editMode = true;
    // }, 2000);
  }

  ngOnInit(): void {
  }

  // Switch editor ON
  onCreateEditMode() {
    this.editMode = true;
  }

  // Turn editor off
  editorSwitch() {
    if(this.editMode && this.editContent) {
      this.editContent = false;
    }
  }

  // Turn editorMode off
  editorModeSwitch() {
    if(this.editMode) {
      this.editorSwitch();
      this.editMode = false;
    }
  }

  

  /// <summary>
  // STEP 1.
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
  // STEP 2.
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

  setSelected(id: string) {
    this.editorClick = true;
    this.selectedIndex = id;

    if (this.currentId === this.selectedIndex) {
      document.getElementById(this.currentId).className.replace("display-5 fw-bold lh-1 mb-3", "btn btn-primary");
      console.log(document.getElementById(this.currentId).className.replace("display-5 fw-bold lh-1 mb-3", "btn btn-primary"));
      this.cssStyle = "btn btn-primary";
    }
  }

  changeStyle($event){

    if(this.editMode && !this.editorClick) {
      this.cssStyle = $event.type == 'mouseover' ? 'shadow-lg bg-body rounded' : '';
    }
  }

}