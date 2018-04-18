<template>

  <div>

	<mypadi-list-topcalltoaction></mypadi-list-topcalltoaction>
	<mypadi-list-navigation></mypadi-list-navigation>
	<mypadi-list-whymypadi></mypadi-list-whymypadi>
	<mypadi-list-howmypadiworks></mypadi-list-howmypadiworks>
	<mypadi-list-faq></mypadi-list-faq>
	<mypadi-statistics></mypadi-statistics>
	<mypadi-commendation></mypadi-commendation>
 </div>

</template>

<script>

import topcalltoaction from './listing/TopCallToAction';
import whymypadi from './listing/WhyMypadi';
import navigation from './listing/Navigation';
import howmypadiworks from './listing/HowMypadiWorks';
import faq from './listing/FAQ';
import statistics from './shared/Statistics';
import commendation from './shared/Commendation';

export default {

	components: {

		'mypadi-list-topcalltoaction': topcalltoaction,
		'mypadi-list-whymypadi': whymypadi,
		'mypadi-list-navigation': navigation,
		'mypadi-list-howmypadiworks': howmypadiworks,
		'mypadi-list-faq':faq,
		'mypadi-statistics':  statistics,
		'mypadi-commendation': commendation




	}


}
</script>