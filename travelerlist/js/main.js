/*!
 * Contact-List v0.0.1
 * This is a contact list app
 * (c) 2019 David Walters
 * MIT License
 * http://link-to-your-git-repo.com
 */

document.addEventListener('click', (function (event) {
	if (!event.target.matches('#click-me')) return;
	alert('You clicked me!');
}), false);