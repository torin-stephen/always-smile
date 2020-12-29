prevhost = window.location.hostname;
prevpath = window.location.pathname;
query = window.location.search;
prevhost = prevhost.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0]

window.location.replace(`https://smile.${prevhost}${prevpath}${query}`);