import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaCode, FaStar, FaFire } from 'react-icons/fa';
import { SiCodeforces, SiCodechef, SiLeetcode } from 'react-icons/si';
import ScrollIndicator from '../../../../components/ScrollIndicator';

// Your usernames
const CODEFORCES_HANDLE = 'ramim-ahmed';
const CODECHEF_HANDLE = 'ahramu584';
const LEETCODE_HANDLE = 'ahramu584';

// Static Programming Data
const codeforcesData = {
    rating: 1322,
    maxRating: 1322,
    rank: 'pupil',
    maxRank: 'pupil',
    problemsSolved: 568,
    contestsParticipated: 46,
    contribution: 0,
    friendOfCount: 0
};

const codechefData = {
    rating: 1636,
    maxRating: 1636,
    stars: '3★',
    globalRank: 'Top 20%',
    countryRank: 'Top 15%',
    problemsSolved: 373,
    contestsParticipated: 28
};

const leetcodeData = {
    totalSolved: 125,
    easySolved: 73,
    mediumSolved: 45,
    hardSolved: 4,
    ranking: 'N/A',
    reputation: 0,
    contestRating: 1550,
    contestsParticipated: 2,
    topPercentage: 15
};

// Total Stats Summary Data
const totalStats = [
    {
        value: '1004+',
        label: 'Total Problems Solved (overall)',
        gradient: 'from-cyan-400 to-blue-500',
    },
    {
        value: '76+',
        label: 'Total Contests',
        gradient: 'from-orange-400 to-red-500',
    },
    {
        value: '3',
        label: 'Active Platforms',
        gradient: 'from-green-400 to-emerald-500',
    },
    {
        value: '3+ Years',
        label: 'Programming Journey',
        gradient: 'from-purple-400 to-pink-500',
    },
];

const Programming = () => {
    const loading = false;

    const getRankColor = (rank) => {
        const colors = {
            'newbie': 'text-gray-400',
            'pupil': 'text-green-400',
            'specialist': 'text-cyan-400',
            'expert': 'text-blue-400',
            'candidate master': 'text-purple-400',
            'master': 'text-orange-400',
            'international master': 'text-orange-500',
            'grandmaster': 'text-red-400',
        };
        return colors[rank?.toLowerCase()] || 'text-gray-400';
    };

    return (
        <section id="programming" className="relative py-24 overflow-hidden bg-[#020617] selection:bg-cyan-500/30">
            {/* Background Grid & Glow Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.05]"></div>
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] animate-pulse delay-700" />
            </div>

            <div className="container relative z-10 px-6 mx-auto max-w-7xl">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-slate-900/80 border border-slate-800/50 backdrop-blur-md">
                            <span className="relative flex w-2 h-2">
                                <span className="absolute inline-flex w-full h-full bg-yellow-400 rounded-full opacity-75 animate-ping"></span>
                                <span className="relative inline-flex w-2 h-2 bg-yellow-500 rounded-full"></span>
                            </span>
                            <span className="text-xs font-bold tracking-widest uppercase text-slate-400">Competitive Programming</span>
                        </div>

                        <h2 className="mb-4 text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl">
                            Coding <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600">Achievements</span>
                        </h2>
                        <p className="max-w-2xl mx-auto text-slate-400">
                            My competitive programming journey across multiple platforms
                        </p>
                    </motion.div>
                </div>

                {/* Cards Grid */}
                <div className="grid gap-8 md:grid-cols-3">
                    {/* Codeforces Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="relative p-8 overflow-hidden transition-all duration-300 border shadow-xl bg-gradient-to-br from-slate-800/60 to-slate-800/30 rounded-2xl border-slate-700/50 hover:border-blue-500/40 hover:shadow-blue-500/20 backdrop-blur-sm group"
                    >
                        {/* Glow Effect */}
                        <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 group-hover:opacity-100"></div>
                        
                        <div className="relative z-10">
                            {/* Icon */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="p-4 transition-all duration-300 shadow-lg bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl shadow-blue-500/30 group-hover:scale-110">
                                    <SiCodeforces className="text-3xl text-white" />
                                </div>
                                {loading && (
                                    <div className="w-6 h-6 border-2 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
                                )}
                            </div>

                            <h3 className="mb-6 text-2xl font-black text-white">Codeforces</h3>

                            {codeforcesData && (
                                <div className="space-y-4">
                                    {/* Current Rating */}
                                    <div className="p-5 border rounded-xl bg-slate-800/50 border-slate-700/50">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-sm font-semibold text-slate-400">Current Rating</span>
                                            <FaStar className="text-lg text-yellow-400" />
                                        </div>
                                        <p className={`text-4xl font-black mb-1 ${getRankColor(codeforcesData.rank)}`}>
                                            {codeforcesData.rating}
                                        </p>
                                        <p className="text-sm font-medium capitalize text-slate-400">
                                            {codeforcesData.rank}
                                        </p>
                                    </div>

                                    {/* Problems Solved */}
                                    <div className="p-5 border rounded-xl bg-slate-800/50 border-slate-700/50">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-sm font-semibold text-slate-400">Problems Solved</span>
                                            <FaCode className="text-lg text-green-400" />
                                        </div>
                                        <p className="mb-1 text-4xl font-black text-green-400">
                                            {codeforcesData.problemsSolved}+
                                        </p>
                                        <p className="text-sm font-medium text-slate-400">
                                            {codeforcesData.contestsParticipated}+ Contests
                                        </p>
                                    </div>

                                    {/* Profile Link */}
                                    <a
                                        href={`https://codeforces.com/profile/${CODEFORCES_HANDLE}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full px-4 py-3 mt-2 text-sm font-bold text-center text-white transition-all duration-300 border rounded-xl bg-slate-800/50 border-slate-700/50 hover:bg-slate-800/70 hover:scale-105 group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-cyan-600"
                                    >
                                        View Profile
                                    </a>
                                </div>
                            )}
                        </div>
                    </motion.div>

                    {/* CodeChef Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative p-8 overflow-hidden transition-all duration-300 border shadow-xl bg-gradient-to-br from-slate-800/60 to-slate-800/30 rounded-2xl border-slate-700/50 hover:border-amber-500/40 hover:shadow-amber-500/20 backdrop-blur-sm group"
                    >
                        {/* Glow Effect */}
                        <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-br from-amber-500/10 to-amber-600/10 group-hover:opacity-100"></div>
                        
                        <div className="relative z-10">
                            {/* Icon - CodeChef Brown/Maroon Theme */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="p-4 transition-all duration-300 shadow-lg bg-gradient-to-br from-amber-600 to-amber-800 rounded-xl shadow-amber-500/30 group-hover:scale-110">
                                    <SiCodechef className="text-3xl text-white" />
                                </div>
                                {loading && (
                                    <div className="w-6 h-6 border-2 rounded-full border-amber-500 animate-spin border-t-transparent"></div>
                                )}
                            </div>

                            <h3 className="mb-6 text-2xl font-black text-white">CodeChef</h3>

                            {codechefData && (
                                <div className="space-y-4">
                                    {/* Current Rating */}
                                    <div className="p-5 border rounded-xl bg-slate-800/50 border-slate-700/50">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-sm font-semibold text-slate-400">Current Rating</span>
                                            <span className="text-lg text-amber-400">{codechefData.stars}</span>
                                        </div>
                                        <p className="mb-1 text-4xl font-black text-amber-400">
                                            {codechefData.rating}
                                        </p>
                                        <p className="text-sm font-medium text-slate-400">
                                            Max: {codechefData.maxRating}
                                        </p>
                                    </div>

                                    {/* Problems Solved */}
                                    <div className="p-5 border rounded-xl bg-slate-800/50 border-slate-700/50">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-sm font-semibold text-slate-400">Problems Solved</span>
                                            <FaCode className="text-lg text-green-400" />
                                        </div>
                                        <p className="mb-1 text-4xl font-black text-green-400">
                                            {codechefData.problemsSolved}+
                                        </p>
                                        <p className="text-sm font-medium text-slate-400">
                                            {codechefData.contestsParticipated}+ Contests
                                        </p>
                                    </div>

                                    {/* Profile Link - CodeChef Brown Theme */}
                                    <a
                                        href={`https://www.codechef.com/users/${CODECHEF_HANDLE}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full px-4 py-3 mt-2 text-sm font-bold text-center text-white transition-all duration-300 border rounded-xl bg-slate-800/50 border-slate-700/50 hover:bg-slate-800/70 hover:scale-105 group-hover:bg-gradient-to-br group-hover:from-amber-600 group-hover:to-amber-800"
                                    >
                                        View Profile
                                    </a>
                                </div>
                            )}
                        </div>
                    </motion.div>

                    {/* LeetCode Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="relative p-8 overflow-hidden transition-all duration-300 border shadow-xl bg-gradient-to-br from-slate-800/60 to-slate-800/30 rounded-2xl border-slate-700/50 hover:border-[#FFA116]/40 hover:shadow-[#FFA116]/20 backdrop-blur-sm group"
                    >
                        {/* Glow Effect - LeetCode Orange */}
                        <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-br from-[#FFA116]/10 to-[#1A1A1A]/10 group-hover:opacity-100"></div>
                        
                        <div className="relative z-10">
                            {/* Icon - LeetCode Signature Orange/Dark Theme */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="p-4 transition-all duration-300 shadow-lg bg-gradient-to-br from-[#FFA116] to-[#FF8C00] rounded-xl shadow-[#FFA116]/30 group-hover:scale-110">
                                    <SiLeetcode className="text-3xl text-[#1A1A1A]" />
                                </div>
                                {loading && (
                                    <div className="w-6 h-6 border-2 border-[#FFA116] rounded-full animate-spin border-t-transparent"></div>
                                )}
                            </div>

                            <h3 className="mb-6 text-2xl font-black text-white">LeetCode</h3>

                            {leetcodeData && (
                                <div className="space-y-4">
                                    {/* Contest Rating */}
                                    <div className="p-5 border rounded-xl bg-slate-800/50 border-slate-700/50">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-sm font-semibold text-slate-400">Contest Rating</span>
                                            <FaStar className="text-lg text-[#FFA116]" />
                                        </div>
                                        <p className="mb-1 text-4xl font-black text-[#FFA116]">
                                            {leetcodeData.contestRating}
                                        </p>
                                        <p className="text-sm font-medium text-slate-400">
                                            Top {leetcodeData.topPercentage}%
                                        </p>
                                    </div>

                                    {/* Total Solved with Difficulty */}
                                    <div className="p-5 border rounded-xl bg-slate-800/50 border-slate-700/50">
                                        <div className="pt-4 border-slate-700/50">
                                            <p className="mb-3 text-xs font-semibold tracking-wider uppercase text-slate-500">By Difficulty</p>
                                            <div className="grid grid-cols-3 gap-3 mb-4">
                                                <div className="text-center">
                                                    <p className="mb-1 text-2xl font-black text-[#00B8A3]">{leetcodeData.easySolved}</p>
                                                    <p className="text-xs font-medium text-slate-400">Easy</p>
                                                </div>
                                                <div className="text-center">
                                                    <p className="mb-1 text-2xl font-black text-[#FFC01E]">{leetcodeData.mediumSolved}</p>
                                                    <p className="text-xs font-medium text-slate-400">Medium</p>
                                                </div>
                                                <div className="text-center">
                                                    <p className="mb-1 text-2xl font-black text-[#FF375F]">{leetcodeData.hardSolved}</p>
                                                    <p className="text-xs font-medium text-slate-400">Hard</p>
                                                </div>
                                            </div>
                                            <p className="text-sm font-medium text-center text-slate-400">
                                                {leetcodeData.contestsParticipated}+ Contests
                                            </p>
                                        </div>
                                    </div>

                                    {/* Profile Link - LeetCode Signature Colors (Same as Icon BG) */}
                                    <a
                                        href={`https://leetcode.com/${LEETCODE_HANDLE}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full px-4 py-3 mt-2 text-sm font-bold text-center text-white transition-all duration-300 border rounded-xl bg-slate-800/50 border-slate-700/50 hover:bg-slate-800/70 hover:scale-105 group-hover:bg-gradient-to-br group-hover:from-[#FFA116] group-hover:to-[#FF8C00] group-hover:text-[#1A1A1A]"
                                    >
                                        View Profile
                                    </a>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>

                {/* Total Stats Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="p-8 mt-12 overflow-hidden border shadow-xl bg-gradient-to-br from-slate-800/60 to-slate-800/30 rounded-2xl border-slate-700/50 backdrop-blur-sm"
                >
                    <div className="grid gap-6 md:grid-cols-4">
                        {totalStats.map((stat, idx) => (
                            <div className="text-center" key={idx}>
                                <p className={`mb-2 text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient}`}>
                                    {stat.value}
                                </p>
                                <p className="text-sm font-medium text-slate-400">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
            <ScrollIndicator label="Projects Story" />
        </section>
    );
};

export default Programming;