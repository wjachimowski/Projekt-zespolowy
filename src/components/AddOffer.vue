<template>
  <div>
     <form id="addOffer" @submit.prevent="addOffer">
      <div id= "error" v-if="error!==''">{{ error }}</div>
      <div>
        <label for="offer_name">Offer name: </label><br>
        <input class="col-md-2" name="offer_name" v-model="offer_name" />
      </div>
      <div>
        <label for="offer_description">Offer description: </label> <br />
        <textarea class="col-md-6"
          name="offer_description"
          rows="6"
          v-model="offer_description"
        />
      </div>
      <input class="offerBtn btn" type="submit" value="Add offer" />
    </form>
  </div>
</template>

<script>


export default {
    name: "AddOffer",
    data(){
        return {
           error: "",
           self_coordinates : {},
           offer_name : "",
           offer_description: ""
    }
    
    },
    created(){
    
    },
    methods : {
        addOffer(){
            navigator.geolocation.getCurrentPosition(position => {
            this.self_coordinates = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }
            this.$emit('addOffer',  {
                offer_id: 4,
                offer_name: this.offer_name,
                offer_description: this.offer_description,
                position: this.self_coordinates

            } );
            this.offer_name = "";
            this.offer_description = "";
            this.self_coordinates = {};
            })

        }
    }
}
        
</script>

<style>

</style>