import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Tooltip } from 'recharts';

import useTranslation from '../../hooks/useTranslation';
import useIsSmallScreen from '../../hooks/useIsSmallScreen';

// Función para mapear valores numéricos a niveles
const mapLevel = (value) => {
  switch (Math.round(value)) {
    case 1: return "A1";
    case 2: return "A2";
    case 3: return "B1";
    case 4: return "B2";
    case 5: return "C1";
    case 6: return "Native";
    default: return "";
  }
};

// Tooltip personalizado
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border p-2 rounded shadow">
        <p className="font-bold">{label}</p>
        {payload.map((entry) => (
          <p key={entry.dataKey} style={{ color: entry.stroke }}>
            {entry.name}: {mapLevel(entry.value)}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const CustomLegend = ({ data }) => {
  // data es un objeto: { spanish: { name, color }, english: {...}, ... }
  const entries = Object.values(data);

  return (
    <ul className="flex justify-center gap-4">
      {entries.map((entry, index) => (
        <li key={index} className="flex items-center gap-1">
          <span
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: entry.color }}
          />
          {entry.name}
        </li>
      ))}
    </ul>
  );
};

const LanguageGraph = () => {
  const { t } = useTranslation();
  const data = t('academic.languageInfo.data');
  const languagesData = t('academic.languageInfo.languages');
  const isSmall = useIsSmallScreen();

  return (
    <div className=''>
      <LineChart
        width={!isSmall ? 700 : 350}
        height={!isSmall ? 400 : 350}
        data={data}
        margin={{ top: 20, right: 20, bottom: 5, left: 10 }}
      >
        <CartesianGrid stroke="#aaa" strokeDasharray="5 5" />

        {/* Líneas por idioma */}
        <Line type="monotone" dataKey="spanish" stroke={t("academic.languageInfo.languages.spanish.color")} strokeWidth={2} name={t("academic.languageInfo.languages.spanish.name")} />
        <Line type="monotone" dataKey="english" stroke={t("academic.languageInfo.languages.english.color")} strokeWidth={2} name={t("academic.languageInfo.languages.english.name")} />
        <Line type="monotone" dataKey="german" stroke={t("academic.languageInfo.languages.german.color")} strokeWidth={2} name={t("academic.languageInfo.languages.german.name")} />

        <XAxis dataKey="name" />
        <YAxis
          width={50}
          ticks={[1, 2, 3, 4, 5, 6, 7]}
          tickFormatter={mapLevel}
          label={{ value: t("academic.languageInfo.level"), position: 'insideLeft', angle: -90 }}
        />
        <Tooltip content={<CustomTooltip />} />
      </LineChart>
      <CustomLegend data={languagesData} />
    </div>
  );
};

export default LanguageGraph;
