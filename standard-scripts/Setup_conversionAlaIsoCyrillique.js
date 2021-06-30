//2014-10-09 : mte : juste changement de date
function open_xul_dialog(theUrl, theFeatures, theArguments)
{
	// try to get the window-watcher
	var ww    = Components.classes["@mozilla.org/embedcomp/window-watcher;1"]
                                 .getService(Components.interfaces.nsIWindowWatcher);
	
	if (!ww) {
		// no chance, give up
		return false;
	}
	
	// let's try to get a valid parent
	var theParent = ww.activeWindow;
	
	var features = null;
	
	if (theFeatures != null) {
		features = theFeatures;
	} else {
		// you may choose to remove some of the features
		// you may also want to specify width=xxx and/or height=xxx 
		features = "centerscreen,chrome,close,titlebar,resizable,modal,dialog=yes";
	}
	
	// it doesn't matter, if we don't have a parent
	// we just use the active window, whether its null or not
	ww.openWindow(theParent, theUrl, "", features, theArguments);
}


function conversionAlaIsoCyrillique()
{
	open_xul_dialog("chrome://ibw/content/xul/conversionAlaIsoCyrillique.xul", null);
}