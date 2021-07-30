export type Experience = {
	id: number;
	year: number|string;
	label: string;
}

export type BarProps = {
	experiences: Experience[];
}

export type BarListProps = {
	list: Experience[];
}