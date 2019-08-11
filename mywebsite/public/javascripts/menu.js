$ (document) .ready (function () { 
    var elemento = $ ('meta [nome = "menu ativo"]'). attr ('conteúdo'); 
    $ ('#' + elemento) .addClass ('ativo '); 
});