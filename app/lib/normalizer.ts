export const normalizeFeedback = (data: any): Feedback => {
    // Helper to safely get nested properties
    const get = (obj: any, keys: string[]) => keys.reduce((acc, key) => (acc && acc[key] !== undefined) ? acc[key] : undefined, obj);

    // Helper to normalize tips
    const normalizeTips = (tips: any[]) => {
        if (!Array.isArray(tips)) return [];
        return tips.map(t => ({
            type: (t.type === 'good' ? 'good' : 'improve') as "good" | "improve", // Force valid type
            tip: t.tip || t.text || '',
            explanation: t.explanation || t.desc || ''
        }));
    };

    // Helper to find score in an object (looks for score, rating, etc)
    const findScore = (obj: any) => {
        if (!obj) return 0;
        if (typeof obj === 'number') return obj;
        return obj.score || obj.rating || obj.value || 0;
    };

    // Helper to find section data (handles snake_case and camelCase)
    const findSection = (key: string, altKeys: string[]) => {
        const section = data[key] || data[key.toLowerCase()] ||
            altKeys.reduce((found, k) => found || data[k], undefined);

        return {
            score: findScore(section),
            tips: normalizeTips(section?.tips || section?.suggestions || [])
        };
    };

    return {
        overallScore: findScore(
            data.overallScore || data.overall_score || data.overallRating || data.overall_rating
        ),
        ATS: findSection('ATS', ['ats', 'ats_compatibility', 'atsCompatibility']),
        toneAndStyle: findSection('toneAndStyle', ['tone_and_style', 'tone_style', 'toneStyle']),
        content: findSection('content', ['content_analysis']),
        structure: findSection('structure', ['structure_analysis', 'formatting']),
        skills: findSection('skills', ['skills_analysis', 'skill_analysis'])
    };
};
