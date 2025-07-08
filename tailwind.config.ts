
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				display: ['Inter', 'sans-serif'],
			},
			fontSize: {
				'xs': ['0.75rem', { lineHeight: '1rem' }],
				'sm': ['0.875rem', { lineHeight: '1.25rem' }],
				'base': ['1rem', { lineHeight: '1.5rem' }],
				'lg': ['1.125rem', { lineHeight: '1.75rem' }],
				'xl': ['1.25rem', { lineHeight: '1.75rem' }],
				'2xl': ['1.5rem', { lineHeight: '2rem' }],
				'3xl': ['1.875rem', { lineHeight: '2.25rem' }],
				'4xl': ['2.25rem', { lineHeight: '2.5rem' }],
				'5xl': ['3rem', { lineHeight: '1.1' }],
				'6xl': ['3.75rem', { lineHeight: '1.1' }],
				'7xl': ['4.5rem', { lineHeight: '1.1' }],
				'8xl': ['6rem', { lineHeight: '1.1' }],
				'9xl': ['8rem', { lineHeight: '1.1' }],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				tectonner: {
					green: {
						DEFAULT: 'hsl(var(--tectonner-green))',
						light: 'hsl(var(--tectonner-green-light))',
						dark: 'hsl(var(--tectonner-green-dark))',
					},
					dark: 'hsl(var(--tectonner-dark))',
					gray: {
						DEFAULT: 'hsl(var(--tectonner-gray))',
						light: 'hsl(var(--tectonner-gray-light))',
					},
					blue: {
						DEFAULT: 'hsl(var(--tectonner-blue))',
						light: 'hsl(var(--tectonner-blue-light))',
					},
					accent: 'hsl(var(--tectonner-accent))',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				xl: '1.5rem',
				'2xl': '2rem',
				'3xl': '3rem',
			},
			spacing: {
				'18': '4.5rem',
				'22': '5.5rem',
				'26': '6.5rem',
				'30': '7.5rem',
				'34': '8.5rem',
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-secondary': 'var(--gradient-secondary)',
				'gradient-accent': 'var(--gradient-accent)',
			},
			backdropBlur: {
				xs: '2px',
			},
			boxShadow: {
				'premium': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
				'premium-lg': '0 35px 60px -12px rgba(0, 0, 0, 0.3)',
				'glow': '0 0 20px rgba(34, 197, 94, 0.3)',
				'glow-lg': '0 0 40px rgba(34, 197, 94, 0.6)',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					"0%": {
						opacity: "0",
						transform: "translateY(10px)"
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)"
					}
				},
				'slide-up': {
					"0%": {
						opacity: "0",
						transform: "translateY(40px)"
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)"
					}
				},
				'fade-in-up': {
					"0%": {
						opacity: "0",
						transform: "translateY(40px)"
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)"
					}
				},
				'fade-in-scale': {
					"0%": {
						opacity: "0",
						transform: "scale(0.9)"
					},
					"100%": {
						opacity: "1",
						transform: "scale(1)"
					}
				},
				'slide-in-left': {
					"0%": {
						opacity: "0",
						transform: "translateX(-40px)"
					},
					"100%": {
						opacity: "1",
						transform: "translateX(0)"
					}
				},
				'slide-in-right': {
					"0%": {
						opacity: "0",
						transform: "translateX(40px)"
					},
					"100%": {
						opacity: "1",
						transform: "translateX(0)"
					}
				},
				'bounce-in': {
					"0%": {
						opacity: "0",
						transform: "scale(0.3)"
					},
					"50%": {
						transform: "scale(1.05)"
					},
					"70%": {
						transform: "scale(0.9)"
					},
					"100%": {
						opacity: "1",
						transform: "scale(1)"
					}
				},
				'pulse-glow': {
					"0%, 100%": {
						boxShadow: "0 0 20px rgba(34, 197, 94, 0.3)"
					},
					"50%": {
						boxShadow: "0 0 40px rgba(34, 197, 94, 0.6)"
					}
				},
				'float': {
					"0%, 100%": {
						transform: "translateY(0px)"
					},
					"50%": {
						transform: "translateY(-10px)"
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-up': 'slide-up 0.8s ease-out',
				'fade-in-up': 'fade-in-up 0.8s ease-out',
				'fade-in-scale': 'fade-in-scale 0.6s ease-out',
				'slide-in-left': 'slide-in-left 0.8s ease-out',
				'slide-in-right': 'slide-in-right 0.8s ease-out',
				'bounce-in': 'bounce-in 1s ease-out',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite',
			},
			transitionDuration: {
				'400': '400ms',
				'600': '600ms',
				'800': '800ms',
				'1200': '1200ms',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
