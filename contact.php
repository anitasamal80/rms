<?php
# TIME ZONE SETTINGS
putenv("TZ=Europe/London");
date_default_timezone_set('Europe/London');
setlocale(LC_CTYPE, 'english');

// Build $em_body ready for the-mail content
// Using $_REQUEST (not recommended) for convenience to cope with submissions of both $_GET and $_POST
$em_body = '';
if (count($_REQUEST))
{
	foreach ($_REQUEST AS $k => $v)
	{
		if (is_array($v) && count($v))
		{
			foreach ($v AS $k2 => $v2)
			{
				$val = $v2;
				$val = trim($val);								// Tidy the output
				$val = strip_tags($val);						// Block XSS
				$val = substr($val, 0, 500);					// Block massive amounts of text
				$val = trim($val);								// Tidy the output
				$val = str_replace(chr(13), '', $val);			// Deal with carriage return line feeds
				$em_body .= $k." = ".$val."\n";
			}
		}
		else
		{
			$val = $v;
			$val = trim($val);								// Tidy the output
			$val = strip_tags($val);						// Block XSS
			$val = substr($val, 0, 500);					// Block massive amounts of text
			$val = trim($val);								// Tidy the output
			$val = str_replace(chr(13), '', $val);			// Deal with carriage return line feeds
			$em_body .= $k." = ".$val."\n";
		}
	}
}
$send_email = f_send_email($em_body);


if (isset($_REQUEST["HDN_CONFIRMATION_URL"]) && strlen($_REQUEST["HDN_CONFIRMATION_URL"]))
{
	header("Location: ".$_REQUEST["HDN_CONFIRMATION_URL"]);
}
else if (isset($_SERVER["HTTP_REFERER"]) && strlen($_SERVER["HTTP_REFERER"]))
{
	header("Location: ".$_SERVER["HTTP_REFERER"]);	// Fallback for if no referrer is set.
}
else
{
	header("Location: http://www.bbc.co.uk");
}

// SEND E-MAIL
function f_send_email($p_em_body = null)
{
	$email = "wellsj10@cf.ac.uk";	// Fallback for if no e-mail address is set.
	if (isset($_REQUEST["HDN_EMAIL"])  && 
		strlen($_REQUEST["HDN_EMAIL"]) && 
		f_is_validate_email_addr($_REQUEST["HDN_EMAIL"])
	)
	{
		$email = $_REQUEST["HDN_EMAIL"];
	}
	$subject = 'CONTACT FORM SUBMITTED '.date("D d M Y H:i:s");
	$body     = date("D, d M Y H:i:s T")."\n\n";
	$body    .= "The below was submitted from the online Contact form."."\n\n";
	// $body .= print_r($_REQUEST, true);
	$body    .= $p_em_body."\n";
	// Only show the HTTP_REFERER if there is one 2/2
	if (isset($_SERVER["HTTP_REFERER"]) && strlen($_SERVER["HTTP_REFERER"]))
	{
		$body    .= "\n"."This data was submitted from:"."\n";
		$body    .= $_SERVER["HTTP_REFERER"];
	}
	$header  = "From: ".$email." <".$email.">\r\n";
	ini_set("SMTP", "localhost");
	ini_set("sendmail_from", $email);
	$em_send = @mail($email, $subject, $body, $header);
	if ($em_send)
	{
		return true;    // 'E-mail successfully sent.';
	}
	else
	{
		return false;   // 'E-mail failed to send.';
	}
	return false;    // 'No e-mail address to send to.';
}


// E-MAIL VALIDATION FUNCTIONS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ START
function f_is_validate_email_addr($p_email)
{
	$qtext = '[^\\x0d\\x22\\x5c\\x80-\\xff]';
	$dtext = '[^\\x0d\\x5b-\\x5d\\x80-\\xff]';
	$atom = '[^\\x00-\\x20\\x22\\x28\\x29\\x2c\\x2e\\x3a-\\x3c\\x3e\\x40\\x5b-\\x5d\\x7f-\\xff]+';
	$quoted_pair = '\\x5c[\\x00-\\x7f]';
	$domain_literal = "\\x5b($dtext|$quoted_pair)*\\x5d";
	$quoted_string = "\\x22($qtext|$quoted_pair)*\\x22";
	$domain_ref = $atom;
	$sub_domain = "($domain_ref|$domain_literal)";
	$word = "($atom|$quoted_string)";
	$domain = "$sub_domain(\\x2e$sub_domain)*";
	$local_part = "$word(\\x2e$word)*";
	$addr_spec = "$local_part\\x40$domain";
	return preg_match("!^$addr_spec$!", $p_email) ? 1 : 0;
}
// E-MAIL VALIDATION FUNCTIONS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ END
?>