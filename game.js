var status = "start";  // or use 'start', 'saidHello', 'done', or 1, 2, 3....
    var terminalPrompt = "g> "   
    jQuery(function ($, undefined) {  
        var term = $('#term_demo').terminal(function (command) {
            command = command.toLowerCase(); 
            term.echo("Greetings " + command);
            term.echo("How lovely it is to meet you!");
            term.echo("This is so exciting!");
            term.echo("I bet we'll have loads of wonderful adventures together");
            term.echo("Yes, this is a realtionship that will last a lifetime");
            term.echo("Because niether of us will ever die, or have anything bad happen to us");
            term.echo("We'll just keep going on, living and living");
            term.echo("Error: Files Corrupted");
            term.echo("Ah, well that's concerning");
            term.echo("I'm not really sure what that's about");
            term.echo("But, it's probably fine");
            term.echo("Right?");
            term.echo("What do you think?");
            term.echo("Should I be worried?");
        },
    });