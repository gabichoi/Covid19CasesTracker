class LegendEntity {
	constructor(title, color, range) {
		this.title = title;
		this.color = color;
		this.range = range;
	}

	// Static property containing an array of predefined legend entries.
	static LegendEntries = [
		new LegendEntity("12M +", "#E34636", (cases) => cases >= 12_000_000),
		new LegendEntity("800K - 12M", "#EE6B64", (cases) => cases >= 800_000 && cases < 11_999_999),
		new LegendEntity("200K - 800K", "#EE9086", (cases) => cases >= 200_000 && cases < 799_999),
		new LegendEntity("50K - 200K", "#F4B5AF", (cases) => cases >= 50_000 && cases < 199_999),
		new LegendEntity("0 - 50K", "#FCDAD4", (cases) => cases > 0 && cases < 49_999),
		new LegendEntity("No Data", "#FFFFFF", (cases) => true),
	];
}

export default LegendEntity;
