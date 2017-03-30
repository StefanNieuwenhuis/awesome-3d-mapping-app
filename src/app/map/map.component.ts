import { Component, OnInit, ElementRef } from '@angular/core';
import { EsriLoaderService } from 'angular2-esri-loader';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  map: any;
  view: any;
  
  constructor(private elRef:ElementRef, private esriLoader:EsriLoaderService) { }

  ngOnInit() {
    this.esriLoader.load({
      url: '//js.arcgis.com/4.3'
    }).then(() => {
      this.esriLoader.loadModules(['esri/Map', 'esri/views/SceneView'])
        .then(([Map, SceneView]) => {
          this.map = new Map({
             basemap: "streets",
             ground: "world-elevation"
          });
​
          this.view = new SceneView({
            container: this.elRef.nativeElement.firstChild,
            map: this.map
          });
​
        });
    });
  }

}
