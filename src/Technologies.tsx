import { useEffect, useState } from 'react'

const Technologies = () => {
    const [technologies, setTechnologies] = useState<any[]>([])
    const [stack, setStack] = useState<string[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                setTechnologies(data)
                setLoading(false)
            })
    }, [])
    const addToStack = (id: string) => {
        if (!stack.includes(id)) {
            setStack([...stack, id])
        }
    }
    const badgeColors = [
        { text: '#0EA5E9', bg: '#E0F2FE' },
        { text: '#16A34A', bg: '#DCFCE7' },
        { text: '#9333EA', bg: '#F3E8FF' },
        { text: '#EA580C', bg: '#FFEDD5' },
        { text: '#DB2777', bg: '#FCE7F3' },
        { text: '#CA8A04', bg: '#FEF9C3' },
    ]
    const removeFromStack = (id: string) => {
        setStack(stack.filter(item => item !== id))
    }

    const removeAll = () => {
        setStack([])
    }
    if (loading) {
        return <p className="py-20 text-center">Loading technologies...</p>
    }
    return (
        <section id="technologies" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

            <div>
                <h2 className="text-[36px] font-extrabold tracking-[-1px] text-[#0F172A]">
                    Explore the <span className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">Technologies</span>
                </h2>
                <p className="mt-3 text-base text-[#475569]">
                    Pick one technology per category to build your ideal stack.
                </p>
            </div>

            <div className="mt-10 grid items-start gap-5 md:grid-cols-[2fr_0.8fr]">

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {technologies.map((technology) => (
                        <div key={technology.id} className="rounded-lg border border-[#E0F2FE] p-5">

                            <div className="flex h-10 items-center justify-between">
                                <img src={technology.icon} alt={technology.name} className="h-10 w-10" />
                                <span
                                    className="rounded-full px-2 py-1 text-[11px] font-semibold"
                                    style={{
                                        color: badgeColors[technology.id.length % badgeColors.length].text,
                                        backgroundColor: badgeColors[technology.id.length % badgeColors.length].bg,
                                    }}
                                >
                                    {technology.badge}
                                </span>
                            </div>

                            <h3 className="mt-4 text-lg font-bold text-[#0F172A]">
                                {technology.name}
                            </h3>

                            <p className="mt-2 h-[60px] text-xs text-[#64748B]">
                                {technology.description}
                            </p>

                            <div className="mt-4 flex items-center justify-between">
                                <span className="rounded bg-[#F1F5F9] px-2 py-1 text-[11px] font-medium text-[#475569]">
                                    {technology.category}
                                </span>
                                <span className="text-[11px] font-medium text-[#64748B]">
                                    {technology.difficulty}
                                </span>
                                <span className="text-[11px] font-semibold text-[#334155]">
                                    <span className="text-[#FBBF24]">★</span> {technology.rating}
                                </span>
                            </div>

                            <button
                                onClick={() => addToStack(technology.id)}
                                disabled={stack.includes(technology.id)}
                                className="mt-4 h-9 w-full cursor-pointer rounded bg-[#0A0F1D] text-xs font-medium text-white disabled:cursor-not-allowed"
                            >
                                {stack.includes(technology.id) ? '✓ Added to Stack' : 'Add to Stack'}
                            </button>
                        </div>
                    ))}
                </div>

                <div className="rounded-2xl border border-[#E2E8F0] p-4">
                    <h3 className="text-base font-bold text-[#0F172A]">Your Stack</h3>

                    <p className="mt-2 text-xs text-[#94A3B8]">
                        {stack.length === 0 ? 'No technologies selected yet.' : `${stack.length} Technology Selected`}
                    </p>

                    {stack.length === 0 ? (
                        <div className="mt-4 flex h-[66px] items-center justify-center rounded-2xl border border-dashed border-[#94A3B8] text-xs text-[#94A3B8]">
                            Your stack is empty.
                        </div>
                    ) : (
                        <div className="mt-4 space-y-2">
                            {stack.map((id) => {
                                const technology = technologies.find(item => item.id === id)

                                return (
                                    <div key={id} className="rounded-2xl flex h-[50px] items-center rounded border border-[#E2E8F0] bg-white px-2">
                                        <img src={technology?.icon} alt={technology?.name} className="h-8 w-8" />

                                        <div className="ml-1 flex-1">
                                            <p className="text-[10px] font-bold text-[#0F172A]">{technology?.name}</p>
                                            <p className="text-[8px] font-bold text-[#94A3B8]">{technology?.category}</p>
                                        </div>
                                        <button
                                            onClick={() => removeFromStack(id)}
                                            className="cursor-pointer text-2xl text-[#94A3B8]">×</button>
                                    </div>
                                )
                            })}
                        </div>
                    )}

                    {stack.length > 0 && (
                        <button
                            onClick={removeAll}
                            className="mt-3 h-[30px] w-full cursor-pointer rounded border border-[#ED8C85] bg-white text-sm font-semibold text-[#D82C20]"
                        >
                            Remove All
                        </button>
                    )}
                </div>

            </div>
        </section>
    )
}

export default Technologies