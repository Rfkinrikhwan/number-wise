import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import { useEffect } from 'react';
import SectionFour from './SectionFour';

export default function Index() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <SectionOne />

            <SectionTwo />

            <SectionThree />

            <SectionFour />
        </>
    )
}
