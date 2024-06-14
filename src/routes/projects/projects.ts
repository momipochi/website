import exh from '$lib/images/exh.webp';
import pBomb from '$lib/images/physics_bomb.webp';
import sixTen from '$lib/images/6tentalk.webp';
import goChat from '$lib/images/go-realtime-chat.webp';
import javaSpring from '$lib/images/java-spring.webp';
import myWebsite from '$lib/images/my-website.webp';
import interpreter from '$lib/images/interpreter.webp';
import algorithms from '$lib/images/algorithms.webp';

export const WIPTypes = {
	WIP: 'WIP',
	INDEFINITE: 'INDEFINITE',
	WITH_CICD: 'WITH_CICD'
} as const;

type WIPType = (typeof WIPTypes)[keyof typeof WIPTypes];

type ConditionalType<T extends WIPType> = T extends typeof WIPTypes.WITH_CICD
	? {
			title: string;
			description: string;
			url: string;
			image: { src: string; alt: string };
			technologies: string[];
			wip?: { type: T; msg: string };
			cicd: { pipeline: string; status: string };
		}
	: {
			title: string;
			description: string;
			url: string;
			image: { src: string; alt: string };
			technologies: string[];
			wip?: { type: WIPType; msg: string };
			cicd?: { pipeline: string; status: string };
		};

export type ProjectType = ConditionalType<WIPType>;

export const projects: ProjectType[] = [
	{
		title: 'This website',
		description: 'My website.',
		url: 'https://github.com/momipochi/website',
		image: { src: myWebsite, alt: "my website, you're looking at it, maybe" },
		technologies: ['typescript', 'svelte', 'sveltekit'],
		wip: { type: WIPTypes.WITH_CICD, msg: 'website' },
		cicd: {
			pipeline: 'https://github.com/momipochi/website/actions/workflows/ci.yml',
			status: 'https://github.com/momipochi/website/actions/workflows/ci.yml/badge.svg'
		}
	},
	{
		title: 'Interpreter',
		description: 'Lox interpreter written in go and c.',
		url: 'https://github.com/momipochi/interpreter',
		image: { src: interpreter, alt: 'interpreter' },
		technologies: ['go', 'c']
	},
	{
		title: 'web-scraper',
		description: 'Personal web scraping tool for gathering images from websites.',
		url: 'https://github.com/momipochi/exh',
		image: { src: exh, alt: 'web-scraper' },
		technologies: ['python', 'beautifulsoup']
	},
	{
		title: 'go realtime chat',
		description: 'Multi-threaded realtime chat. This project focuses on Go.',
		url: 'https://github.com/momipochi/go-realtime-chat',
		image: { src: goChat, alt: 'go-realtime-chat' },
		technologies: ['go', 'reactTS', 'websocket', 'docker']
	},
	{
		title: 'go-algo-practice',
		description: 'Repository for algorithm questions.',
		url: 'https://github.com/momipochi/algo-practice',
		image: { src: algorithms, alt: 'algorithms' },
		technologies: ['go'],
		wip: { type: WIPTypes.WITH_CICD, msg: 'Daily practice' },
		cicd: {
			pipeline: 'https://github.com/momipochi/algo-practice/actions/workflows/cicd.yml',
			status: 'https://github.com/momipochi/algo-practice/actions/workflows/cicd.yml/badge.svg'
		}
	},
	{
		title: 'java-algo-practice',
		description: 'Repository for algorithm questions.',
		url: 'https://github.com/momipochi/java-algo-practice',
		image: { src: algorithms, alt: 'algorithms' },
		technologies: ['java'],
		wip: { type: WIPTypes.WITH_CICD, msg: 'Daily practice' },
		cicd: {
			pipeline: 'https://github.com/momipochi/java-algo-practice/actions/workflows/maven.yml',
			status:
				'https://github.com/momipochi/java-algo-practice/actions/workflows/maven.yml/badge.svg'
		}
	},
	{
		title: 'taiwan amigo',
		description: 'Social network using websocket to communicate between users.',
		url: 'https://github.com/momipochi/taiwan_amigo',
		image: { src: sixTen, alt: 'taiwan amigo' },
		technologies: ['nestjs', 'nodejs', 'typescript', 'vue3', 'websocket', 'docker', 'azure']
	},
	{
		title: 'java spring REST',
		description: 'Complete REST project in Java with junit tests, repository pattern, etc.',
		url: 'https://github.com/momipochi/java-spring-mini-project',
		image: { src: javaSpring, alt: 'java spring' },
		technologies: ['java', 'reactTS', 'spring', 'junit']
	},
	{
		title: 'physics bomb',
		description: 'Physics simulation using translation by vector.',
		url: 'https://github.com/momipochi/physics_bomb',
		image: { src: pBomb, alt: 'physics bomb' },
		technologies: ['javascript', 'p5js']
	}
];
