// Write a function that returns the value at a give path

let drugData = {
    "associatedDrug": {
        "name": "asprin",
        "dose": "",
        "strength": "500 mg",
        "medication": {
            "aceInhibitors": {
                "name": "lisinopril",
                "strength": "10 mg Tab",
                "dose": "1 tab",
                "route": "PO",
                "sig": "daily",
                "pillCount": "#90",
                "refills": "Refill 3"
            }
        }
    }
}

function getByPath([first, ...rest], obj) {
    if (!first || !obj[first]) {
        return undefined;
    }

    if (rest.length < 1) {
        return obj[first]
    } else {
        return getByPath(rest, obj[first]);
    }
}

var result = getByPath([
    'associatedDrug',
    'medication',
    'aceInhibitors',
    'name'
], drugData);
console.log(result);


