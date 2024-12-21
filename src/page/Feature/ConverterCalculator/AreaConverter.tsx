import { useEffect, useState } from 'react';
import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import BackNavigation from '@/components/custom/BackNavigation';
import { changeThemeStore } from '@/store';

const AreaConverter = () => {
    const { theme } = changeThemeStore();
    const [fromUnit, setFromUnit] = useState('kilometer_square');
    const [toUnit, setToUnit] = useState('meter_square');
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState('');

    const conversions: any = {
        kilometer_square: {
            meter_square: (value: number) => value * 1000000,
        },
        hectare: {
            meter_square: (value: number) => value * 10000,
        },
        are: {
            meter_square: (value: number) => value * 100,
        },
        acre: {
            meter_square: (value: number) => value * 4046.86,
        }
    };

    const unitOptions = [
        { value: 'kilometer_square', label: 'Square Kilometers' },
        { value: 'hectare', label: 'Hectares' },
        { value: 'are', label: 'Ares' },
        { value: 'acre', label: 'Acres' },
    ];

    const targetUnits = [
        { value: 'meter_square', label: 'Square Meters' },
    ];

    const handleConvert = () => {
        if (!inputValue) {
            setResult('');
            return;
        }

        const value = parseFloat(inputValue);
        if (isNaN(value)) {
            setResult('Invalid input');
            return;
        }

        const conversionFunction = conversions[fromUnit as keyof typeof conversions]?.[toUnit as any];
        if (conversionFunction) {
            const convertedValue = conversionFunction(value);
            setResult(`${convertedValue.toLocaleString('en-US')} square meters`);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section
            className={`${theme === "dark" ? "bg-wise-dark" : ""
                } flex flex-col min-h-screen gap-5 px-4 py-6 sm:px-12 md:px-24 lg:px-48`}
        >
            <BackNavigation title="Area Converter" to="/features" />

            <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                Converting area units used for land, buildings, or geographical regions.
            </p>

            <Card className="w-full">
                <CardHeader></CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">From:</label>
                        <Select
                            value={fromUnit}
                            onValueChange={(value) => {
                                setFromUnit(value);
                                setResult('');
                            }}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select unit" />
                            </SelectTrigger>
                            <SelectContent>
                                {unitOptions.map((option) => (
                                    <SelectItem key={option.value} value={option.value}>
                                        {option.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">To:</label>
                        <Select
                            value={toUnit}
                            onValueChange={(value) => {
                                setToUnit(value);
                                setResult('');
                            }}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select unit" />
                            </SelectTrigger>
                            <SelectContent>
                                {targetUnits.map((option) => (
                                    <SelectItem key={option.value} value={option.value}>
                                        {option.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Value:</label>
                        <Input
                            type="number"
                            value={inputValue}
                            onChange={(e) => {
                                setInputValue(e.target.value);
                                setResult('');
                            }}
                            onKeyUp={(e) => {
                                if (e.key === 'Enter') {
                                    handleConvert();
                                }
                            }}
                            placeholder="Enter value"
                        />
                    </div>

                    <button
                        className="w-full bg-wise-primary text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
                        onClick={handleConvert}
                    >
                        Convert
                    </button>

                    {result && (
                        <div className="mt-4 p-3 bg-gray-100 rounded-md">
                            <p className="text-center font-medium">Result: {result}</p>
                        </div>
                    )}
                </CardContent>
            </Card>
        </section>
    );
};

export default AreaConverter;
