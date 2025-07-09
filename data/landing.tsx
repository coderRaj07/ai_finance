import {
  BarChart3,
  Receipt,
  PieChart,
  CreditCard,
  Globe,
  Zap,
} from "lucide-react";
import { ReactNode } from "react";

// Interfaces
interface StatItem {
  value: string;
  label: string;
}

interface FeatureItem {
  icon: ReactNode;
  title: string;
  description: string;
}

interface HowItWorksItem {
  icon: ReactNode;
  title: string;
  description: string;
}

interface TestimonialItem {
  name: string;
  role: string;
  image: string;
  quote: string;
}

// Stats Data
export const statsData: StatItem[] = [
  { value: "50K+", label: "Active Users" },
  { value: "$2B+", label: "Transactions Tracked" },
  { value: "99.9%", label: "Uptime" },
  { value: "4.9/5", label: "User Rating" },
];

// Features Data
export const featuresData: FeatureItem[] = [
  {
    icon: <BarChart3 className="h-8 w-8 text-[#c17e10]" />,
    title: "Advanced Analytics",
    description: "Get detailed insights into your spending patterns with AI-powered analytics",
  },
  {
    icon: <Receipt className="h-8 w-8 text-[#c17e10]" />,
    title: "Smart Receipt Scanner",
    description: "Extract data automatically from receipts using advanced AI technology",
  },
  {
    icon: <PieChart className="h-8 w-8 text-[#c17e10]" />,
    title: "Budget Planning",
    description: "Create and manage budgets with intelligent recommendations",
  },
  {
    icon: <CreditCard className="h-8 w-8 text-[#c17e10]" />,
    title: "Multi-Account Support",
    description: "Manage multiple accounts and credit cards in one place",
  },
  {
    icon: <Globe className="h-8 w-8 text-[#c17e10]" />,
    title: "Multi-Currency",
    description: "Support for multiple currencies with real-time conversion",
  },
  {
    icon: <Zap className="h-8 w-8 text-[#c17e10]" />,
    title: "Automated Insights",
    description: "Get automated financial insights and recommendations",
  },
];

// How It Works Data
export const howItWorksData: HowItWorksItem[] = [
  {
    icon: <CreditCard className="h-8 w-8 text-[#c17e10]" />,
    title: "1. Create Your Account",
    description: "Get started in minutes with our simple and secure sign-up process",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-[#c17e10]" />,
    title: "2. Track Your Spending",
    description: "Automatically categorize and track your transactions in real-time",
  },
  {
    icon: <PieChart className="h-8 w-8 text-[#c17e10]" />,
    title: "3. Get Insights",
    description: "Receive AI-powered insights and recommendations to optimize your finances",
  },
];

// Testimonials Data
export const testimonialsData: TestimonialItem[] = [
  {
    name: "Sarah Johnson",
    role: "Small Business Owner",
    image: "https://i.pravatar.cc/150?img=32",
    quote: "Welth has transformed how I manage my business finances. The AI insights have helped me identify cost-saving opportunities I never knew existed.",
  },
  {
    name: "Michael Chen",
    role: "Freelancer",
    image: "https://i.pravatar.cc/150?img=51",
    quote: "The receipt scanning feature saves me hours each month. Now I can focus on my work instead of manual data entry and expense tracking.",
  },
  {
    name: "Emily Rodriguez",
    role: "Financial Advisor",
    image: "https://i.pravatar.cc/150?img=36",
    quote: "I recommend Welth to all my clients. The multi-currency support and detailed analytics make it perfect for international investors.",
  },
];
