---
layout: page
title:  "Come And Join Us"
---

#{{ page.title}}#

We manage websites for dozens of companies around the country, and are constantly taking on new web projects within southern Louisiana and beyond. We've been growing steadily since our inception, and are always on the lookout for talented designers and developers to help us get projects out the door better and faster. We'd love to see your portfolio and resume. If you'd like to work with us, send us a brief letter of introduction to <jobs@3coasts.com>, and we may just invite you in to talk at our office! 

</br>

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
