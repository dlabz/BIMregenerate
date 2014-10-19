function Notifier() {
	var othis = this;

	this.setSelector = function(selector) {
		var currentmessage = $(othis.selector).find(".message").html();
		$(othis.selector).hide();
		othis.selector = selector;
		if (currentmessage != "" && currentmessage != undefined) {
			$(selector).show();
			$(selector).find(".message").html(currentmessage).parent().addClass("alert-success");
		} else {
			$(othis.selector).hide();
		}
		$(othis.selector).find(".close").click(othis.clear);
	};

	this.clear = function() {
		console.log("clear");
		$(othis.selector).find(".message").html("").parent().hide();
	};

	this.resetStatus = function() {
		if (othis.lastTimeOut != null) {
			clearTimeout(othis.lastTimeOut);
			othis.lastTimeOut = null;
		}
		$(othis.selector).stop(true, true);
		$(othis.selector).fadeOut(1000);
	};

	this.resetStatusQuick = function() {
		if (othis.lastTimeOut != null) {
			clearTimeout(othis.lastTimeOut);
			othis.lastTimeOut = null;
		}
		$(othis.selector).hide();
	};

	this.setSuccess = function(status, timeToShow) {
		if (timeToShow == null) {
			timeToShow = 5000;
		}
		$(othis.selector).stop(true, true);
		if (othis.lastTimeOut != null) {
			clearTimeout(othis.lastTimeOut);
			othis.lastTimeOut = null;
		}
		$(othis.selector).find(".message").html(status).parent().removeClass("initialhide").removeClass("alert-danger").removeClass("alert-info").addClass("alert-success").show();
		var notifier = this;
		if (timeToShow != -1) {
			othis.lastTimeOut = setTimeout(function() {
				notifier.resetStatus();
			}, timeToShow);
		}
	};

	this.setInfo = function(status, timeToShow) {
		if (timeToShow == null) {
			timeToShow = 5000;
		}
		$(othis.selector).stop(true, true);
		if (othis.lastTimeOut != null) {
			clearTimeout(othis.lastTimeOut);
			othis.lastTimeOut = null;
		}
		$(othis.selector).find(".message").html(status).parent().show().removeClass("alert-danger").removeClass("alert-success").addClass("alert-info");
		var notifier = this;
		if (timeToShow != -1) {
			othis.lastTimeOut = setTimeout(function() {
				notifier.resetStatus();
			}, timeToShow);
		}
	};

	this.setError = function(error) {
		if (othis.lastTimeOut != null) {
			clearTimeout(othis.lastTimeOut);
			othis.lastTimeOut = null;
		}
		$(othis.selector).find(".message").html(error).parent().removeClass("alert-info").removeClass("alert-success").addClass("alert-danger").show();
	};

	othis.setSelector(".indexStatus .status");
}