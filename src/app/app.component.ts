import { Component, OnInit, ViewEncapsulation, ElementRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private elementRef:ElementRef) {}

  public treeConfig = {
      nodeWidth: 150,
      nodeHeight: 100
  };

  public tree: any;
  //$("#tree-node-bc4c7a02-5379-4046-92be-12c67af4295a > div.tree-element-main.expanded > div > div.buttons > div.two > nav > div > ul > li:nth-child(1)").parentNode.parentNode.parentNode.parentNode.parentNode.children[2]
  
  public ngOnInit() {
    document.addEventListener('.add',function(e){
      debugger
   })
    setTimeout(()=>{
      var d1 = this.elementRef.nativeElement.querySelector('.tree-element-main .buttons');
      d1.insertAdjacentHTML('beforeend', '<nav class="nav"> <input type="checkbox" class="nav__cb" id="menu-cb"/> <div class="nav__content"> <ul class="nav__items"><li class="nav__item"> <span class="nav__item-text delete"> supprimer </span> </li> <li class="nav__item" > <span class="nav__item-text add" "> Ajouter </span> </li> </ul> </div> <label class="nav__btn" for="menu-cb"></label> </nav>');
    },100)
    let json =[
      {
        "guid": "bc4c7a02-5379-4046-92be-12c67af4295a",
        "displayName": "root",
        "children": []
      }
    ]
    this.tree = {
      json,
      config: this.treeConfig
    };
    
    // this.tree.expandAll()
   
  }

}
