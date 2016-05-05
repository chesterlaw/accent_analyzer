# Accent Analyzer

This Rails app is used to analyze accents, by providing a way to define sub-sections of an audio file. This allows the user to more efficiently study the specific intonations of a word or phrase when spoken in a certain accent.

## How to use

Clone and `cd` into the repository, run `bundle`, and fire up the Rails app with `rails server`.

Open the app at localhost:3000.

Add your MP3 sound files of the accents you want to analyze to public/sounds.

In the app, click the "New Sound" button.

Type in the name of your mp3 file for Filename (eg. "French.mp3"), and give the sound a name.

Hit Create.

You'll be redirected to your sound's page, where you can play the entire sound clip at the top of the page.

More usefully, using the "New Section" form, you can define a section, which plays your sound from the specified start time until the end time. The format of both times are in millisecond units from the start. You can use the "Preview" button to help you make a good cut.

After creating a section, it will appear under the header "Sections." You can hit the play button next to each section to play it. The prepended number also signifies the keyboard shortcut assigned to it.
