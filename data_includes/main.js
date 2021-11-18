// Remove command prefix
PennController.ResetPrefix(null)

// Instruction trial
	newTrial("instructions",
	    defaultText
	        .center()
	        .print()
	    ,
	    newText("instructions-1", "Welcome!")

	    ,
	    newText("instructions-2", "<p>In this experiment, you will hear and read a sentence, and see two images.</p>")

	    ,
	    newText("instructions-3", "<b>Select the image that better matches the sentence:</b>")

	    ,
	    newText("instructions-4", "<p>Press the <b>F</b> key to select the image on the left.<br>Press the <b>J</b> key to select the image on the right.</p>")

	    ,
	    newButton("wait", "Click to start the experiment")
	        .center()
	        .print()
	        .wait()
	)

// Experimental trial
Template("items.csv", row =>
    newTrial("experimental-trial",
        newAudio("audio", row.audio)
            .play()
        ,
        newText("sentence", row.sentence)
            .center()
            .unfold(row.duration)
        ,
        newImage("plural", row.plural_image)
            .size(200, 200)
        ,
        newImage("singular", row.singular_image)
            .size(200, 200)
        ,
        newCanvas("side-by-side", 450,200)
            .add(  0, 0, getImage("plural"))
            .add(250, 0, getImage("singular"))
            .center()
            .print()
            .log()
        ,
        newKey("keypress", "FJ")
            .log()
            .wait()
        ,
        getAudio("audio")
            .wait("first")
    )
    .log("group", row.group)
    .log("item", row.item)
    .log("condition", row.inflection)
)