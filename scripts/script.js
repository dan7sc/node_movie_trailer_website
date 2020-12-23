
    // Pause the video when the modal is closed
    $(document).on('click', '.hanging-close,.modal-backdrop, .modal', function(event) {
        // Remove the src so the player itself
        // gets removed, as this is the only
        // reliable way to ensure the video stops playing in IE
        $("#trailer-video-container").empty();
    });

    // Start playing the video whenever the trailer modal is opened
    $(document).on('click', '#play-trailer', function(event) {
        const trailerYoutubeId = $(this).attr('data-trailer-youtube-id');
        const sourceUrl = 'http://www.youtube.com/embed/' + trailerYoutubeId + '?autoplay=1&html5=1';
        $("#trailer-video-container").empty().append($("<iframe></iframe>", {
            'id': 'trailer-video',
            'type': 'text-html',
            'src': sourceUrl,
            'frameborder': 0
        }));
    });

    // Show information about the move whenever the info modal is opened
    $(document).on('click', '#info-data', function(event) {
        const title = $(this).attr('data-title');
        const storyline = $(this).attr('data-storyline');
        const released = $(this).attr('data-released');
        const runtime = $(this).attr('data-runtime');
        const genre = $(this).attr('data-genre');
        const director = $(this).attr('data-director');
        const rated = $(this).attr('data-rated');
        const rating = $(this).attr('data-rating');

        $("#info-container #title").empty().html("<i><b>"+ title + "</b> (" + released + ")</i>");
        $("#info-container #storyline").html("<i>&emsp;" + storyline + "</i>");
        $("#info-container #runtime").html("<b>Runtime: </b>" + runtime);
        $("#info-container #genre").html("<b>Genre: </b>" + genre);
        $("#info-container #director").html("<b>Director: </b>" + director);
        $("#info-container #rated").html("<b>Rated: </b>" + rated);
        $("#info-container #rating").html("<b>Rating: </b>" + rating);
    });

    // Animate in the movies when the page loads
    $(document).ready(function() {
        $('.anime').hide().first().show("fast", function showNext() {
            $(this).next("div").show("fast", showNext);
        });
    });
