import ReactCountryFlag from "react-country-flag"

export default function CountryFlag({country}) {
    return (
        <span>
            {/* <ReactCountryFlag countryCode={country} /> */}

            {/* <ReactCountryFlag
                className="emojiFlag"
                countryCode="US"
                style={{
                    fontSize: '2em',
                    lineHeight: '2em',
                }}
                aria-label="United States"
            /> */}

            {/* <ReactCountryFlag countryCode={country} svg /> */}

            <ReactCountryFlag
                countryCode={country}
                svg
                style={{
                    width: '2rem',
                    height: '2rem',
                }}
                title={country}
            />

            {/* <ReactCountryFlag
                countryCode="US"
                svg
                cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                cdnSuffix="svg"
                title="US"
            /> */}
        </span>
    )
}
