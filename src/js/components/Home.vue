
<template>
	<div>
	  <mypadi-booking></mypadi-booking>
      <mypadi-statistics></mypadi-statistics>
      <mypadi-commendation></mypadi-commendation>
      <mypadi-registerapartment></mypadi-registerapartment>
      <mypadi-findapartment></mypadi-findapartment>
      <mypadi-referal></mypadi-referal>

	</div>
</template>


<script>

import booking from './shared/Booking';
import statistics from './shared/Statistics';
import commendation from './shared/Commendation';
import registerapartment from './shared/RegisterApartment';
import findapartment from './shared/FindApartment';
import referal from './shared/Referal';



	export default{

		components: {
		'mypadi-booking': booking,
		'mypadi-statistics': statistics,
		'mypadi-commendation': commendation,
		'mypadi-registerapartment': registerapartment,
		'mypadi-findapartment': findapartment,
		'mypadi-referal': referal,
	}


	}
</script>