
type Props = {
    label: string;
    name: string;
    type?: string;
    required?: boolean;
}

export default function TextArea({ label, name, required = true }: Props) {
    return (
        <div className="mb-4 w-full">
            <label htmlFor={name}
                className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            <input
                id={name}
                name={name}
                required={required}
                className="w-full border border-gray-300 py-2 px-3 rounded-md shadow-sm focus:outline-none focus:border-sky-500" />
        </div>
    )
}