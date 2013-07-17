---
layout: page
title:  "Come And Join Us"
---

#{{ page.title}}#

We work with brilliant clients from lovely local companies to international household names, and on all kinds of projects from mobile apps to elaborate e-commerce sites. There are around 50 of us here, and everyone has been chosen not just because they’re pretty damn great at what they do, but also because we know they’ll fit in nicely with our team.

If this sounds like the sort of place for you, check out our current vacancies. Even if you don’t see something that suits, feel free to get in touch anyway. We’d love to have a chat, and see if we can keep you in mind for future roles.

</br>

##Get in touch##

Would you like to apply for one of our vacancies, or just chat to us about future job opportunities? Yes? Awesome. Just fill out this form and we'll get back to you asap.

<form class="form job">
	<fieldset>
		<label for="name">Name:</label>
		<input type="text" id="name" class="form-text" />
	</fieldset>
	<fieldset>
		<label for="email">Email:</label>
		<input type="email" id="email" class="form-text" />
	</fieldset>	
	<fieldset>
		<label for="location">Location:</label>
		<input type="text" id="location" class="form-text" />
	</fieldset>
	<fieldset>
		<label for="title">Current Job Title:</label>
		<select id="gender">
			<option>Developer</option>
			<option>Designer</option>
			<option>System Administrator</option>
			<option>Project Manager</option>
		</select>
	</fieldset>
	<fieldset>
		<label for="url">Website:</label>
		<input type="url" id="url" class="form-text" placeholder="http://yourdomain.com" />
	</fieldset>
	<fieldset>
		<label for="cv">CV Upload:</label>
		<input type="file" id="cv" class="form-text" />
	</fieldset>	
	<fieldset>
		<label for="message">Message:</label>
		<textarea id="message"></textarea>
	</fieldset>
	<fieldset class="form-actions">
		<input type="submit" value="Submit" />
	</fieldset>
</form>		

</br>

##Available Positions##

{% include jobs.html %}
