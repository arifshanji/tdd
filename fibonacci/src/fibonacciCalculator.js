module.exports = {
	calculate : function calculate(i) {
		let sum;
		let psum=0;
		for (let j =0; j <= i; j++) {
			if (j < 2){
				sum = j;
			} else {
				let csum = sum;
				sum += psum;
				psum = csum;
			}
		}

		return sum;
	}
}
