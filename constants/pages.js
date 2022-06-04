"use strict";

module.exports = [

	{
		icon: "fa fa-home",
		type: "page",
		name: {
			en: "Home",
			cn: "首頁"		
		},
		path: [
			"/",
			"/home"
		]
	},

	{
		icon: "fa fa-code",
		type: "menu",
		name: {
			en: "Developer Tools",
			cn: "開發工具"
		},
		menu: [
			{
				name: {
					en: "SQLize JSON",
					cn: "SQLize JSON"
				},
				path: [
					"/sqlize"
				]
			}
		]
	},

	{
		icon: "fa fa-question-circle-o",
		type: "page",
		name: {
			en: "Help",
			cn: "說明"		
		},
		path: [
			"/help"
		]
	}


];
