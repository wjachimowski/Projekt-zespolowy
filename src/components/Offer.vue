<template>
  <div>
    <button class="delete" v-if="this.if_my_offers" @click="deleteOffer()">
        Delete offer
    </button>
      <button class="details" v-if="!if_detailed" @click="this.if_detailed = true">
      Details
      </button>
      <button class="hideDetails" v-if="if_detailed" @click="this.if_detailed = false">
      Hide details
      </button>
      Name: {{this.content.offer_name}}<br>
      <div class="detail_offer" v-if="if_detailed">
          ----------------------------------<br>
          Description: {{this.content.offer_description}}<br>
          ---------------------------------- <br>
        <div>
        Map:
        </div>
    <GMapMap
      :center="getCenter()"
      :zoom="7"
      map-type-id="terrain"
      class="map"
    >
    <GMapCluster>
      <GMapMarker
          :key="index"
          v-for="(m, index) in [{ 
              position: {
                lat: this.content.position.lat, lng: this.content.position.lng
            }}]"
          :position="m.position"
          :clickable="true"
          :draggable="false"
          :icon=blue
          @click="center=m.position"
      />
    </GMapCluster>
  </GMapMap>
      </div>
      <div>
      -------------------------------------
      </div>
  </div>
</template>

<script>


export default {
    name: "Offer",
    props: ["content","if_my_offers"],
    data(){
        return {
            blue: 'http://maps.google.com/mapfiles/kml/paddle/blu-circle.png',
            self_coordinates : {},
            if_detailed : false,
            center: {lat: 51.093048, lng: 6.842120},
            markers: [
            {
                position: {
                lat: 51.093048, lng: 6.842120
            },
            }
        , // Along list of clusters
      ]
    }
    
    },
    methods :{
        deleteOffer(){
            this.$emit('deleteOffer',  {
                offer_id: this.content.offer_id,
             } );
        },
        getCenter(){
            return {
                lat: this.content.position.lat,
                lng: this.content.position.lng
            }
        }
    },
    created(){
             this.markers = [
            {
                position: {
                lat: 51.093048, lng: 6.842120,
                },
                
            }
        ]
    }
}
</script>

<style>
.map{
    width: 400px;
    height: 400px;
}
</style>