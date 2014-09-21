/*
    Made by Øyvind Restad
*/
function evalUnsafe(userCode) {
	var vars = [];

	var legal = {console: 'console', alert: 'alert'};
	for(var b in this) {
		if (!(b in legal)) {
			vars.push(b);
		}
	}

	var funcs = vars.join(",");
	var code = "(function sandbox(" + funcs + ") {function runthis() {eval(" + JSON.stringify(userCode) + ");};var a = new runthis();})();";
	eval(code);
}
