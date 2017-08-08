function bonjour(nom, prenom) {
    $('#bonjour').html('Bonjour ' + nom + ' ' + prenom + ' !');
}

bonjour('Tiraboschi', 'Nicolas');


function compteToNombre(nombre) {
    for (var i = 0; i <= nombre; i++) {
        $('#countToNumber').append('<ul><li>' + i + '</li></ul>');
    }
}

compteToNombre(5)


function add(arg1, arg2) {
    return arg1 + arg2;
}

function mult(arg1, arg2) {
    return arg1 * arg2;
}

function div(arg1, arg2) {
    return arg2 === 0 ? ' par 0 n\'est pas possible !' : arg1 / arg2;
}

function operation(arg1, arg2) {
    arg1 = Number(prompt('Entrez un chiffre'));
    arg2 = Number(prompt('Puis un 2eme chiffre'));
    (isNaN(arg1) || isNaN(arg2)) || (!arg1 ||  !arg2) ? $('#operation').html('Vous n\'avez pas rempli correctement les chiffres ! Calcul impossible !') : $('#operation').html('L\'addtition donne ' + (add(arg1, arg2)) + ', la multiplication ' + mult(arg1, arg2) + ' et la division ' + div(arg1, arg2));
}

operation()


function perroquet(memoire = "") {
    this.ecoute = function () {
        this.memoire = prompt("Qu'est-ce que vous dites ?");
        return this.memoire;
    }
    this.repete = function () {
        if (this.memoire == false) {
            $('#perroquet').append('Oupsss je n\'ai pas comprrriiis !');
        } else {
            for (var i = 0; i < 3; i++) {
                $('#perroquet').append(this.memoire + ' ');
            }
        }
    }
}

perroquet = new perroquet();

perroquet.ecoute();
perroquet.repete();
