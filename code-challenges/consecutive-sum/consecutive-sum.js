function consecutivesum(num){
        let count = 1;
        let k;
        for( k = 2; k < Math.sqrt( 2 * num ); k++ ) {
            if ( ( num - ( k * ( k - 1 )/2) ) % k == 0) 
                count++;
        }
        return count-1;
}
