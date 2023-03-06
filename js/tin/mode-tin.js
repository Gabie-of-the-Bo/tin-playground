// This is where we really create the highlighting rules
ace.define('ace/mode/tin', ['require', 'exports', 'module', 'ace/mode/text', 'ace/lib/oop', 'ace/mode/text_highlight_rules'], (acequire, exports, module) => {
    "use strict";

	var oop = acequire("../lib/oop");
    const TextMode = acequire('ace/mode/text').Mode;
    const TextHighlightRules = acequire('ace/mode/text_highlight_rules').TextHighlightRules;

    const TinHighlightRules = function TinHighlightRules() {
        let common_rules = [
            {
                token: "string",
                regex: '"(?=.)',
                next: "qqstring"
            },
            {
                token: "comment",
                regex: "∴.*?(∴|$)"
            },
            {
                token: "constant.character",
                regex: '\'\.\'',
            },
            {
                token: "constant.numeric",
                regex: "-?[0-9]+(\\.[0-9]+)?"
            },
            {
                token: "support.function",
                regex: "ι|□|↓|\\*↓|↑|∑|∏|⌊|⌈|⍴|#|\\*#|º|\\*º|@|⇑|.⇑|⇓|.⇓|⊃|⊂|,|_|⨯|⨝|⊔|⤾|⊞|`|´|\\$|\\.\\$|\\*\\$|\\*\\.\\$"
            },
            {
                token: "keyword.operator",
                regex: "\\+|-|·|/|%|\\^|⊳|⊲|⌉|⌋|√|⫰|𝔹|𝔽|¬|∨|∧|=|<|≤|>|≥|∃|∄|∀|¡|!|↶|↷|⋮|\\?|◊|:|∇"
            },
            {
                token: "variable.parameter",
                regex: "(→|←|\\.|→\\.)([a-zA-Z_]+)"
            },
            {
                token: "entity.name.function",
                regex: "[a-zA-Z_]+"
            },
            {
                token: ["text", "keyword.operator", "text", "entity.name.function", "text"],
                regex: "(\\|)(→)(\\|)([a-zA-Z_]+)(\\|)",
                next: "start"
            },
        ]

        this.$rules = {
            "start": [
                ...common_rules,
            ],

            "qqstring": [
                {
                    token: "string",
                    regex: '"|$',
                    next: "start"
                }, 
                {
                    defaultToken: "string"
                }
            ]
        }
    };
	oop.inherits(TinHighlightRules, TextHighlightRules);

	var Mode = function () {
		this.HighlightRules = TinHighlightRules;
		this.$behaviour = this.$defaultBehaviour;
	};
	oop.inherits(Mode, TextMode);

	(function () {
		this.$id = "ace/mode/tin";
	}).call(Mode.prototype);

    exports.Mode = Mode;
});

(function() {
    ace.require(["ace/mode/tin"], function(m) {
        if (typeof module == "object" && typeof exports == "object" && module) {
            module.exports = m;
        }
    });
})();