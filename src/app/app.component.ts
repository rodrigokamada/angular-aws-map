import { AfterViewInit, Component } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { Amplify } from 'aws-amplify';
import { createMap } from 'maplibre-gl-js-amplify';
import * as maplibregl from 'maplibre-gl';

import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {

  map: any;

  constructor() {
    Amplify.configure(environment.amplify);
  }

  public ngAfterViewInit(): void {
    this.loadMap();
  }

  private getCurrentPosition(): any {
    return new Observable((observer: Subscriber<any>) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position: any) => {
          observer.next({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          observer.complete();
        });
      } else {
        observer.error();
      }
    });
  }

  private loadMap(): void {
    createMap({
      container: 'map',
      center: [0, 0],
      zoom: 0,
    })
    .then((map: any) => {
      this.map = map;

      this.map.addControl(new maplibregl.NavigationControl());
      this.map.addControl(new maplibregl.GeolocateControl());

      this.getCurrentPosition()
      .subscribe((position: any) => {
        this.map.flyTo({ center: [position.longitude, position.latitude], zoom: 13 });

        const marker = new maplibregl.Marker();
        marker.setLngLat([position.longitude, position.latitude]);
        marker.setPopup(new maplibregl.Popup().setHTML('Angular AWS Map'));
        marker.addTo(this.map);
      });
    });
  }
}
