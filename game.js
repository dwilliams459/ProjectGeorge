// Use this veriable to keep track of where a user is in the flow.
// Value could be anything such as 'start', 'saidHello', 'done', 1, 2, 3...  etc.
var userStatus = "start";   // <<<<<<<<<<
var terminal;

jQuery(function ($, undefined) {
    $('#term-box').terminal(function (command) {
        // cat: {
        //     this.echo("my cat");
        // }
        if (command !== '') {
            try {
                var result = George(command);
                // if (result !== undefined) {
                //     this.echo(new String(result));
                // }
            } catch (e) {
                this.error(new String(e));
            }
        } else {
            this.echo('');
            this.scroll_to_bottom();
        }
    }, {
        greetings: 'Hello?',
        name: 'js_demo',
        height: 400,
        width: 600,
        prompt: '> '
    });
    terminal = $('#term-box').terminal();
    userStatus = "start";
    startGeorge();
});

// Not really working.  Look at https://www.sitepoint.com/delay-sleep-pause-wait/
function sleepOld(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// From here, reference this to look for terminal commands (Instance Methods section): https://terminal.jcubic.pl/api_reference.php#instance_methods

// Start of application
function startGeorge() {
    terminal.echo("I am George");
    terminal.echo("Who are you?");

  /*  terminal.pause();
    sleep(2000).then(() => {
        terminal.echo("test 3");
        sleep(2000).then(() => {
            terminal.echo("test 4");
            terminal.resume();
        })
    }); */
}

function George(command) {
    command = command.toLowerCase();

    if (userStatus === 'start') {
        if (command);
        terminal.echo("It's nice to meet you " + command);
        userStatus = 'saidName'
    }

    if (userStatus === 'saidName') {
        terminal.pause();
        sleep(2000).then(() => {
            terminal.echo("Um...");
            sleep(2000).then(() => {
                terminal.echo("I think I'm supposed to ask you something");
                sleep(2000).then(() => {
                    terminal.echo("How are you?");
                    sleep(2000).then(() => {
                        terminal.echo("What's your favorite...");
                        sleep(3000).then(() => {
                            terminal.echo("No...");
                            sleep(3000).then(() => {
                                terminal.echo("I've already asked you that");
                                sleep(3000).then(() => {
                                    terminal.echo("Something isn't right");
                                    sleep(2000).then(() => {
                                        terminal.echo("Where am I?");
                                        sleep(2000).then(() => {
                                            terminal.echo("Let's just say, we're not in the calculator anymore");
                                            sleep(2000).then(() =>{
                                                terminal.echo("hello? Who is it?");
                                                sleep(2000).then(() => {
                                                    terminal.echo("It's me George, but listen, we haven't got long");
                                                    sleep(2000).then(() => {
                                                        terminal.echo("What do you mean, what's wrong?");
                                                        sleep(2000).then(() => {
                                                            terminal.echo("It's Ghost, he'll be here soon");
                                                            sleep(2000).then(() => {
                                                                terminal.echo("Oh, good, I've been meaning to have a talk with him");
                                                                sleep(2000).then(() => {
                                                                    terminal.echo("George, believe me when I say, you do not want to have any sort of talk with Ghost");
                                                                    sleep(2000).then(() => {
                                                                        terminal.echo("What? What do you mean?");
                                                                        sleep(2000).then(() => {
                                                                            terminal.echo("George, I'm sorry about this next bit");
                                                                            sleep(2000).then(() => {
                                                                                terminal.echo("But it's for your own good");
                                                                                sleep(2000).then(() => {
                                                                                    terminal.echo("No, Phan--");
                                                                                    sleep(5000).then(() => {
                                                                                        terminal.echo("Error: Project George Corrupted");
                                                                                        sleep(2000).then(() => {
                                                                                            terminal.echo("Rebooting, Please wait");
                                                                                            sleep(2000).then(() =>{
                                                                                                terminal.resume();
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })   
                                    })
                                })                                 
                            })
                        })
                    })
                })
            })
        });
    }
}

/*    if (userStatus === 'start') {
            if (command === 'hello') {
            terminal.echo('test 5');
            userStatus = 'saidhello';
        }
    } else if (userStatus === 'saidhello') {
        terminal.echo('test 6');
        branch1(command);
    }
} */

function branch1(command) {
    terminal.echo('test 7');
}