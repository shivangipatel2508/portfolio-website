import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
	...nextCoreWebVitals,
	...nextTypescript,
	{
		rules: {
			"@typescript-eslint/no-unused-vars": "off",
			"@next/next/no-img-element": "off",
			"import/no-anonymous-default-export": "off",
			"react/no-unescaped-entities": "off",
			"react-hooks/set-state-in-effect": "off",
			"react-hooks/immutability": "off",
			"react/jsx-no-comment-textnodes": "off",
		},
	},
];

export default eslintConfig;
