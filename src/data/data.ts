import type { Dimension, DateDimension, Attribute, DataSourceInfo } from '@sisense/sdk-data';

import { createAttribute, createDateDimension, createDimension } from '@sisense/sdk-data';

export const DataSource: DataSourceInfo = { title: 'IG', type: 'elasticube' };

interface dataDimension extends Dimension {
    abbreviated_product_name: Attribute;
    acidity_100g: Attribute;
    addedsalt_100g: Attribute;
    addedsugars_100g: Attribute;
    additives: Attribute;
    additives_en: Attribute;
    additives_n: Attribute;
    additives_tags: Attribute;
    alcohol_100g: Attribute;
    allergens: Attribute;
    allergens_en: Attribute;
    alphalinolenicacid_100g: Attribute;
    arachidicacid_100g: Attribute;
    arachidonicacid_100g: Attribute;
    behenicacid_100g: Attribute;
    betacarotene_100g: Attribute;
    betaglucan_100g: Attribute;
    bicarbonate_100g: Attribute;
    biotin_100g: Attribute;
    brand_owner: Attribute;
    brands: Attribute;
    brands_tags: Attribute;
    butyricacid_100g: Attribute;
    caffeine_100g: Attribute;
    calcium_100g: Attribute;
    capricacid_100g: Attribute;
    caproicacid_100g: Attribute;
    caprylicacid_100g: Attribute;
    carbohydrates_100g: Attribute;
    carbonfootprintfrommeatorfish_100g: Attribute;
    carbonfootprint_100g: Attribute;
    carnitine_100g: Attribute;
    casein_100g: Attribute;
    categories: Attribute;
    categories_en: Attribute;
    categories_tags: Attribute;
    ceroticacid_100g: Attribute;
    chloride_100g: Attribute;
    chlorophyl_100g: Attribute;
    cholesterol_100g: Attribute;
    choline_100g: Attribute;
    chromium_100g: Attribute;
    cities: Attribute;
    cities_tags: Attribute;
    cocoa_100g: Attribute;
    code: Attribute;
    collagenmeatproteinratio_100g: Attribute;
    completeness: Attribute;
    copper_100g: Attribute;
    countries: Attribute;
    countries_en: Attribute;
    countries_tags: Attribute;
    created_t: Attribute;
    creator: Attribute;
    data_quality_errors_tags: Attribute;
    dihomogammalinolenicacid_100g: Attribute;
    docosahexaenoicacid_100g: Attribute;
    ecoscore_grade: Attribute;
    ecoscore_score: Attribute;
    eicosapentaenoicacid_100g: Attribute;
    elaidicacid_100g: Attribute;
    emb_codes: Attribute;
    emb_codes_tags: Attribute;
    energyfromfat_100g: Attribute;
    energykcal_100g: Attribute;
    energykj_100g: Attribute;
    energy_100g: Attribute;
    erucicacid_100g: Attribute;
    erythritol_100g: Attribute;
    fat_100g: Attribute;
    fiber_100g: Attribute;
    first_packaging_code_geo: Attribute;
    fluoride_100g: Attribute;
    folates_100g: Attribute;
    food_groups: Attribute;
    food_groups_en: Attribute;
    food_groups_tags: Attribute;
    fructose_100g: Attribute;
    fruitsvegetablesnutsdried_100g: Attribute;
    fruitsvegetablesnutsestimatefromingredients_100g: Attribute;
    fruitsvegetablesnutsestimate_100g: Attribute;
    fruitsvegetablesnuts_100g: Attribute;
    gammalinolenicacid_100g: Attribute;
    generic_name: Attribute;
    glucose_100g: Attribute;
    glycemicindex_100g: Attribute;
    gondoicacid_100g: Attribute;
    image_ingredients_small_url: Attribute;
    image_ingredients_url: Attribute;
    image_nutrition_small_url: Attribute;
    image_nutrition_url: Attribute;
    image_small_url: Attribute;
    image_url: Attribute;
    ingredients_analysis_tags: Attribute;
    ingredients_tags: Attribute;
    ingredients_text: Attribute;
    inositol_100g: Attribute;
    insolublefiber_100g: Attribute;
    iodine_100g: Attribute;
    iron_100g: Attribute;
    labels: Attribute;
    labels_en: Attribute;
    labels_tags: Attribute;
    lactose_100g: Attribute;
    last_image_t: Attribute;
    last_modified_by: Attribute;
    last_modified_t: Attribute;
    last_updated_t: Attribute;
    lauricacid_100g: Attribute;
    lignocericacid_100g: Attribute;
    linoleicacid_100g: Attribute;
    magnesium_100g: Attribute;
    main_category: Attribute;
    main_category_en: Attribute;
    maltodextrins_100g: Attribute;
    maltose_100g: Attribute;
    manganese_100g: Attribute;
    manufacturing_places: Attribute;
    manufacturing_places_tags: Attribute;
    meadacid_100g: Attribute;
    melissicacid_100g: Attribute;
    molybdenum_100g: Attribute;
    monounsaturatedfat_100g: Attribute;
    montanicacid_100g: Attribute;
    myristicacid_100g: Attribute;
    nervonicacid_100g: Attribute;
    nitrate_100g: Attribute;
    no_nutrition_data: Attribute;
    nova_group: Attribute;
    nucleotides_100g: Attribute;
    nutrient_levels_tags: Attribute;
    nutriscore_grade: Attribute;
    nutriscore_score: Attribute;
    nutritionscorefr_100g: Attribute;
    nutritionscoreuk_100g: Attribute;
    oleicacid_100g: Attribute;
    omega3fat_100g: Attribute;
    omega6fat_100g: Attribute;
    omega9fat_100g: Attribute;
    origins: Attribute;
    origins_en: Attribute;
    origins_tags: Attribute;
    owner: Attribute;
    packaging: Attribute;
    packaging_en: Attribute;
    packaging_tags: Attribute;
    packaging_text: Attribute;
    palmiticacid_100g: Attribute;
    pantothenicacid_100g: Attribute;
    ph_100g: Attribute;
    phosphorus_100g: Attribute;
    phylloquinone_100g: Attribute;
    pnns_groups_1: Attribute;
    pnns_groups_2: Attribute;
    polyols_100g: Attribute;
    polyunsaturatedfat_100g: Attribute;
    popularity_tags: Attribute;
    potassium_100g: Attribute;
    product_name: Attribute;
    product_quantity: Attribute;
    proteins_100g: Attribute;
    purchase_places: Attribute;
    quantity: Attribute;
    salt_100g: Attribute;
    saturatedfat_100g: Attribute;
    selenium_100g: Attribute;
    serumproteins_100g: Attribute;
    serving_quantity: Attribute;
    serving_size: Attribute;
    silica_100g: Attribute;
    sodium_100g: Attribute;
    solublefiber_100g: Attribute;
    starch_100g: Attribute;
    states: Attribute;
    states_en: Attribute;
    states_tags: Attribute;
    stearicacid_100g: Attribute;
    stores: Attribute;
    sucrose_100g: Attribute;
    sugars_100g: Attribute;
    sulphate_100g: Attribute;
    taurine_100g: Attribute;
    traces: Attribute;
    traces_en: Attribute;
    traces_tags: Attribute;
    transfat_100g: Attribute;
    unique_scans_n: Attribute;
    unsaturatedfat_100g: Attribute;
    url: Attribute;
    vitamina_100g: Attribute;
    vitaminb12_100g: Attribute;
    vitaminb1_100g: Attribute;
    vitaminb2_100g: Attribute;
    vitaminb6_100g: Attribute;
    vitaminb9_100g: Attribute;
    vitaminc_100g: Attribute;
    vitamind_100g: Attribute;
    vitamine_100g: Attribute;
    vitamink_100g: Attribute;
    vitaminpp_100g: Attribute;
    waterhardness_100g: Attribute;
    zinc_100g: Attribute;
    created_datetime: DateDimension;
    last_image_datetime: DateDimension;
    last_modified_datetime: DateDimension;
    last_updated_datetime: DateDimension;
}
export const data = createDimension({
    name: 'data',
    abbreviated_product_name: createAttribute({
        name: 'abbreviated_product_name',
        type: 'text-attribute',
        expression: '[data.abbreviated_product_name]',
    }),
    acidity_100g: createAttribute({
        name: 'acidity_100g',
        type: 'text-attribute',
        expression: '[data.acidity_100g]',
    }),
    addedsalt_100g: createAttribute({
        name: 'addedsalt_100g',
        type: 'text-attribute',
        expression: '[data.added-salt_100g]',
    }),
    addedsugars_100g: createAttribute({
        name: 'addedsugars_100g',
        type: 'text-attribute',
        expression: '[data.added-sugars_100g]',
    }),
    additives: createAttribute({
        name: 'additives',
        type: 'text-attribute',
        expression: '[data.additives]',
    }),
    additives_en: createAttribute({
        name: 'additives_en',
        type: 'text-attribute',
        expression: '[data.additives_en]',
    }),
    additives_n: createAttribute({
        name: 'additives_n',
        type: 'numeric-attribute',
        expression: '[data.additives_n]',
    }),
    additives_tags: createAttribute({
        name: 'additives_tags',
        type: 'text-attribute',
        expression: '[data.additives_tags]',
    }),
    alcohol_100g: createAttribute({
        name: 'alcohol_100g',
        type: 'text-attribute',
        expression: '[data.alcohol_100g]',
    }),
    allergens: createAttribute({
        name: 'allergens',
        type: 'text-attribute',
        expression: '[data.allergens]',
    }),
    allergens_en: createAttribute({
        name: 'allergens_en',
        type: 'text-attribute',
        expression: '[data.allergens_en]',
    }),
    alphalinolenicacid_100g: createAttribute({
        name: 'alphalinolenicacid_100g',
        type: 'text-attribute',
        expression: '[data.alpha-linolenic-acid_100g]',
    }),
    arachidicacid_100g: createAttribute({
        name: 'arachidicacid_100g',
        type: 'text-attribute',
        expression: '[data.arachidic-acid_100g]',
    }),
    arachidonicacid_100g: createAttribute({
        name: 'arachidonicacid_100g',
        type: 'text-attribute',
        expression: '[data.arachidonic-acid_100g]',
    }),
    behenicacid_100g: createAttribute({
        name: 'behenicacid_100g',
        type: 'text-attribute',
        expression: '[data.behenic-acid_100g]',
    }),
    betacarotene_100g: createAttribute({
        name: 'betacarotene_100g',
        type: 'text-attribute',
        expression: '[data.beta-carotene_100g]',
    }),
    betaglucan_100g: createAttribute({
        name: 'betaglucan_100g',
        type: 'text-attribute',
        expression: '[data.beta-glucan_100g]',
    }),
    bicarbonate_100g: createAttribute({
        name: 'bicarbonate_100g',
        type: 'text-attribute',
        expression: '[data.bicarbonate_100g]',
    }),
    biotin_100g: createAttribute({
        name: 'biotin_100g',
        type: 'text-attribute',
        expression: '[data.biotin_100g]',
    }),
    brand_owner: createAttribute({
        name: 'brand_owner',
        type: 'text-attribute',
        expression: '[data.brand_owner]',
    }),
    brands: createAttribute({
        name: 'brands',
        type: 'text-attribute',
        expression: '[data.brands]',
    }),
    brands_tags: createAttribute({
        name: 'brands_tags',
        type: 'text-attribute',
        expression: '[data.brands_tags]',
    }),
    butyricacid_100g: createAttribute({
        name: 'butyricacid_100g',
        type: 'text-attribute',
        expression: '[data.butyric-acid_100g]',
    }),
    caffeine_100g: createAttribute({
        name: 'caffeine_100g',
        type: 'text-attribute',
        expression: '[data.caffeine_100g]',
    }),
    calcium_100g: createAttribute({
        name: 'calcium_100g',
        type: 'numeric-attribute',
        expression: '[data.calcium_100g]',
    }),
    capricacid_100g: createAttribute({
        name: 'capricacid_100g',
        type: 'text-attribute',
        expression: '[data.capric-acid_100g]',
    }),
    caproicacid_100g: createAttribute({
        name: 'caproicacid_100g',
        type: 'text-attribute',
        expression: '[data.caproic-acid_100g]',
    }),
    caprylicacid_100g: createAttribute({
        name: 'caprylicacid_100g',
        type: 'text-attribute',
        expression: '[data.caprylic-acid_100g]',
    }),
    carbohydrates_100g: createAttribute({
        name: 'carbohydrates_100g',
        type: 'numeric-attribute',
        expression: '[data.carbohydrates_100g]',
    }),
    carbonfootprintfrommeatorfish_100g: createAttribute({
        name: 'carbonfootprintfrommeatorfish_100g',
        type: 'numeric-attribute',
        expression: '[data.carbon-footprint-from-meat-or-fish_100g]',
    }),
    carbonfootprint_100g: createAttribute({
        name: 'carbonfootprint_100g',
        type: 'text-attribute',
        expression: '[data.carbon-footprint_100g]',
    }),
    carnitine_100g: createAttribute({
        name: 'carnitine_100g',
        type: 'text-attribute',
        expression: '[data.carnitine_100g]',
    }),
    casein_100g: createAttribute({
        name: 'casein_100g',
        type: 'text-attribute',
        expression: '[data.casein_100g]',
    }),
    categories: createAttribute({
        name: 'categories',
        type: 'text-attribute',
        expression: '[data.categories]',
    }),
    categories_en: createAttribute({
        name: 'categories_en',
        type: 'text-attribute',
        expression: '[data.categories_en]',
    }),
    categories_tags: createAttribute({
        name: 'categories_tags',
        type: 'text-attribute',
        expression: '[data.categories_tags]',
    }),
    ceroticacid_100g: createAttribute({
        name: 'ceroticacid_100g',
        type: 'text-attribute',
        expression: '[data.cerotic-acid_100g]',
    }),
    chloride_100g: createAttribute({
        name: 'chloride_100g',
        type: 'text-attribute',
        expression: '[data.chloride_100g]',
    }),
    chlorophyl_100g: createAttribute({
        name: 'chlorophyl_100g',
        type: 'text-attribute',
        expression: '[data.chlorophyl_100g]',
    }),
    cholesterol_100g: createAttribute({
        name: 'cholesterol_100g',
        type: 'numeric-attribute',
        expression: '[data.cholesterol_100g]',
    }),
    choline_100g: createAttribute({
        name: 'choline_100g',
        type: 'text-attribute',
        expression: '[data.choline_100g]',
    }),
    chromium_100g: createAttribute({
        name: 'chromium_100g',
        type: 'text-attribute',
        expression: '[data.chromium_100g]',
    }),
    cities: createAttribute({
        name: 'cities',
        type: 'text-attribute',
        expression: '[data.cities]',
    }),
    cities_tags: createAttribute({
        name: 'cities_tags',
        type: 'text-attribute',
        expression: '[data.cities_tags]',
    }),
    cocoa_100g: createAttribute({
        name: 'cocoa_100g',
        type: 'text-attribute',
        expression: '[data.cocoa_100g]',
    }),
    code: createAttribute({
        name: 'code',
        type: 'numeric-attribute',
        expression: '[data.code]',
    }),
    collagenmeatproteinratio_100g: createAttribute({
        name: 'collagenmeatproteinratio_100g',
        type: 'text-attribute',
        expression: '[data.collagen-meat-protein-ratio_100g]',
    }),
    completeness: createAttribute({
        name: 'completeness',
        type: 'numeric-attribute',
        expression: '[data.completeness]',
    }),
    copper_100g: createAttribute({
        name: 'copper_100g',
        type: 'text-attribute',
        expression: '[data.copper_100g]',
    }),
    countries: createAttribute({
        name: 'countries',
        type: 'text-attribute',
        expression: '[data.countries]',
    }),
    countries_en: createAttribute({
        name: 'countries_en',
        type: 'text-attribute',
        expression: '[data.countries_en]',
    }),
    countries_tags: createAttribute({
        name: 'countries_tags',
        type: 'text-attribute',
        expression: '[data.countries_tags]',
    }),
    created_t: createAttribute({
        name: 'created_t',
        type: 'numeric-attribute',
        expression: '[data.created_t]',
    }),
    creator: createAttribute({
        name: 'creator',
        type: 'text-attribute',
        expression: '[data.creator]',
    }),
    data_quality_errors_tags: createAttribute({
        name: 'data_quality_errors_tags',
        type: 'text-attribute',
        expression: '[data.data_quality_errors_tags]',
    }),
    dihomogammalinolenicacid_100g: createAttribute({
        name: 'dihomogammalinolenicacid_100g',
        type: 'text-attribute',
        expression: '[data.dihomo-gamma-linolenic-acid_100g]',
    }),
    docosahexaenoicacid_100g: createAttribute({
        name: 'docosahexaenoicacid_100g',
        type: 'text-attribute',
        expression: '[data.docosahexaenoic-acid_100g]',
    }),
    ecoscore_grade: createAttribute({
        name: 'ecoscore_grade',
        type: 'text-attribute',
        expression: '[data.ecoscore_grade]',
    }),
    ecoscore_score: createAttribute({
        name: 'ecoscore_score',
        type: 'numeric-attribute',
        expression: '[data.ecoscore_score]',
    }),
    eicosapentaenoicacid_100g: createAttribute({
        name: 'eicosapentaenoicacid_100g',
        type: 'text-attribute',
        expression: '[data.eicosapentaenoic-acid_100g]',
    }),
    elaidicacid_100g: createAttribute({
        name: 'elaidicacid_100g',
        type: 'text-attribute',
        expression: '[data.elaidic-acid_100g]',
    }),
    emb_codes: createAttribute({
        name: 'emb_codes',
        type: 'text-attribute',
        expression: '[data.emb_codes]',
    }),
    emb_codes_tags: createAttribute({
        name: 'emb_codes_tags',
        type: 'text-attribute',
        expression: '[data.emb_codes_tags]',
    }),
    energyfromfat_100g: createAttribute({
        name: 'energyfromfat_100g',
        type: 'text-attribute',
        expression: '[data.energy-from-fat_100g]',
    }),
    energykcal_100g: createAttribute({
        name: 'energykcal_100g',
        type: 'numeric-attribute',
        expression: '[data.energy-kcal_100g]',
    }),
    energykj_100g: createAttribute({
        name: 'energykj_100g',
        type: 'numeric-attribute',
        expression: '[data.energy-kj_100g]',
    }),
    energy_100g: createAttribute({
        name: 'energy_100g',
        type: 'numeric-attribute',
        expression: '[data.energy_100g]',
    }),
    erucicacid_100g: createAttribute({
        name: 'erucicacid_100g',
        type: 'text-attribute',
        expression: '[data.erucic-acid_100g]',
    }),
    erythritol_100g: createAttribute({
        name: 'erythritol_100g',
        type: 'text-attribute',
        expression: '[data.erythritol_100g]',
    }),
    fat_100g: createAttribute({
        name: 'fat_100g',
        type: 'numeric-attribute',
        expression: '[data.fat_100g]',
    }),
    fiber_100g: createAttribute({
        name: 'fiber_100g',
        type: 'numeric-attribute',
        expression: '[data.fiber_100g]',
    }),
    first_packaging_code_geo: createAttribute({
        name: 'first_packaging_code_geo',
        type: 'text-attribute',
        expression: '[data.first_packaging_code_geo]',
    }),
    fluoride_100g: createAttribute({
        name: 'fluoride_100g',
        type: 'text-attribute',
        expression: '[data.fluoride_100g]',
    }),
    folates_100g: createAttribute({
        name: 'folates_100g',
        type: 'text-attribute',
        expression: '[data.folates_100g]',
    }),
    food_groups: createAttribute({
        name: 'food_groups',
        type: 'text-attribute',
        expression: '[data.food_groups]',
    }),
    food_groups_en: createAttribute({
        name: 'food_groups_en',
        type: 'text-attribute',
        expression: '[data.food_groups_en]',
    }),
    food_groups_tags: createAttribute({
        name: 'food_groups_tags',
        type: 'text-attribute',
        expression: '[data.food_groups_tags]',
    }),
    fructose_100g: createAttribute({
        name: 'fructose_100g',
        type: 'text-attribute',
        expression: '[data.fructose_100g]',
    }),
    fruitsvegetablesnutsdried_100g: createAttribute({
        name: 'fruitsvegetablesnutsdried_100g',
        type: 'text-attribute',
        expression: '[data.fruits-vegetables-nuts-dried_100g]',
    }),
    fruitsvegetablesnutsestimatefromingredients_100g: createAttribute({
        name: 'fruitsvegetablesnutsestimatefromingredients_100g',
        type: 'numeric-attribute',
        expression: '[data.fruits-vegetables-nuts-estimate-from-ingredients_100g]',
    }),
    fruitsvegetablesnutsestimate_100g: createAttribute({
        name: 'fruitsvegetablesnutsestimate_100g',
        type: 'text-attribute',
        expression: '[data.fruits-vegetables-nuts-estimate_100g]',
    }),
    fruitsvegetablesnuts_100g: createAttribute({
        name: 'fruitsvegetablesnuts_100g',
        type: 'text-attribute',
        expression: '[data.fruits-vegetables-nuts_100g]',
    }),
    gammalinolenicacid_100g: createAttribute({
        name: 'gammalinolenicacid_100g',
        type: 'text-attribute',
        expression: '[data.gamma-linolenic-acid_100g]',
    }),
    generic_name: createAttribute({
        name: 'generic_name',
        type: 'text-attribute',
        expression: '[data.generic_name]',
    }),
    glucose_100g: createAttribute({
        name: 'glucose_100g',
        type: 'text-attribute',
        expression: '[data.glucose_100g]',
    }),
    glycemicindex_100g: createAttribute({
        name: 'glycemicindex_100g',
        type: 'text-attribute',
        expression: '[data.glycemic-index_100g]',
    }),
    gondoicacid_100g: createAttribute({
        name: 'gondoicacid_100g',
        type: 'text-attribute',
        expression: '[data.gondoic-acid_100g]',
    }),
    image_ingredients_small_url: createAttribute({
        name: 'image_ingredients_small_url',
        type: 'text-attribute',
        expression: '[data.image_ingredients_small_url]',
    }),
    image_ingredients_url: createAttribute({
        name: 'image_ingredients_url',
        type: 'text-attribute',
        expression: '[data.image_ingredients_url]',
    }),
    image_nutrition_small_url: createAttribute({
        name: 'image_nutrition_small_url',
        type: 'text-attribute',
        expression: '[data.image_nutrition_small_url]',
    }),
    image_nutrition_url: createAttribute({
        name: 'image_nutrition_url',
        type: 'text-attribute',
        expression: '[data.image_nutrition_url]',
    }),
    image_small_url: createAttribute({
        name: 'image_small_url',
        type: 'text-attribute',
        expression: '[data.image_small_url]',
    }),
    image_url: createAttribute({
        name: 'image_url',
        type: 'text-attribute',
        expression: '[data.image_url]',
    }),
    ingredients_analysis_tags: createAttribute({
        name: 'ingredients_analysis_tags',
        type: 'text-attribute',
        expression: '[data.ingredients_analysis_tags]',
    }),
    ingredients_tags: createAttribute({
        name: 'ingredients_tags',
        type: 'text-attribute',
        expression: '[data.ingredients_tags]',
    }),
    ingredients_text: createAttribute({
        name: 'ingredients_text',
        type: 'text-attribute',
        expression: '[data.ingredients_text]',
    }),
    inositol_100g: createAttribute({
        name: 'inositol_100g',
        type: 'text-attribute',
        expression: '[data.inositol_100g]',
    }),
    insolublefiber_100g: createAttribute({
        name: 'insolublefiber_100g',
        type: 'text-attribute',
        expression: '[data.insoluble-fiber_100g]',
    }),
    iodine_100g: createAttribute({
        name: 'iodine_100g',
        type: 'text-attribute',
        expression: '[data.iodine_100g]',
    }),
    iron_100g: createAttribute({
        name: 'iron_100g',
        type: 'numeric-attribute',
        expression: '[data.iron_100g]',
    }),
    labels: createAttribute({
        name: 'labels',
        type: 'text-attribute',
        expression: '[data.labels]',
    }),
    labels_en: createAttribute({
        name: 'labels_en',
        type: 'text-attribute',
        expression: '[data.labels_en]',
    }),
    labels_tags: createAttribute({
        name: 'labels_tags',
        type: 'text-attribute',
        expression: '[data.labels_tags]',
    }),
    lactose_100g: createAttribute({
        name: 'lactose_100g',
        type: 'text-attribute',
        expression: '[data.lactose_100g]',
    }),
    last_image_t: createAttribute({
        name: 'last_image_t',
        type: 'numeric-attribute',
        expression: '[data.last_image_t]',
    }),
    last_modified_by: createAttribute({
        name: 'last_modified_by',
        type: 'text-attribute',
        expression: '[data.last_modified_by]',
    }),
    last_modified_t: createAttribute({
        name: 'last_modified_t',
        type: 'numeric-attribute',
        expression: '[data.last_modified_t]',
    }),
    last_updated_t: createAttribute({
        name: 'last_updated_t',
        type: 'numeric-attribute',
        expression: '[data.last_updated_t]',
    }),
    lauricacid_100g: createAttribute({
        name: 'lauricacid_100g',
        type: 'text-attribute',
        expression: '[data.lauric-acid_100g]',
    }),
    lignocericacid_100g: createAttribute({
        name: 'lignocericacid_100g',
        type: 'text-attribute',
        expression: '[data.lignoceric-acid_100g]',
    }),
    linoleicacid_100g: createAttribute({
        name: 'linoleicacid_100g',
        type: 'text-attribute',
        expression: '[data.linoleic-acid_100g]',
    }),
    magnesium_100g: createAttribute({
        name: 'magnesium_100g',
        type: 'text-attribute',
        expression: '[data.magnesium_100g]',
    }),
    main_category: createAttribute({
        name: 'main_category',
        type: 'text-attribute',
        expression: '[data.main_category]',
    }),
    main_category_en: createAttribute({
        name: 'main_category_en',
        type: 'text-attribute',
        expression: '[data.main_category_en]',
    }),
    maltodextrins_100g: createAttribute({
        name: 'maltodextrins_100g',
        type: 'text-attribute',
        expression: '[data.maltodextrins_100g]',
    }),
    maltose_100g: createAttribute({
        name: 'maltose_100g',
        type: 'text-attribute',
        expression: '[data.maltose_100g]',
    }),
    manganese_100g: createAttribute({
        name: 'manganese_100g',
        type: 'text-attribute',
        expression: '[data.manganese_100g]',
    }),
    manufacturing_places: createAttribute({
        name: 'manufacturing_places',
        type: 'text-attribute',
        expression: '[data.manufacturing_places]',
    }),
    manufacturing_places_tags: createAttribute({
        name: 'manufacturing_places_tags',
        type: 'text-attribute',
        expression: '[data.manufacturing_places_tags]',
    }),
    meadacid_100g: createAttribute({
        name: 'meadacid_100g',
        type: 'text-attribute',
        expression: '[data.mead-acid_100g]',
    }),
    melissicacid_100g: createAttribute({
        name: 'melissicacid_100g',
        type: 'text-attribute',
        expression: '[data.melissic-acid_100g]',
    }),
    molybdenum_100g: createAttribute({
        name: 'molybdenum_100g',
        type: 'text-attribute',
        expression: '[data.molybdenum_100g]',
    }),
    monounsaturatedfat_100g: createAttribute({
        name: 'monounsaturatedfat_100g',
        type: 'text-attribute',
        expression: '[data.monounsaturated-fat_100g]',
    }),
    montanicacid_100g: createAttribute({
        name: 'montanicacid_100g',
        type: 'text-attribute',
        expression: '[data.montanic-acid_100g]',
    }),
    myristicacid_100g: createAttribute({
        name: 'myristicacid_100g',
        type: 'text-attribute',
        expression: '[data.myristic-acid_100g]',
    }),
    nervonicacid_100g: createAttribute({
        name: 'nervonicacid_100g',
        type: 'text-attribute',
        expression: '[data.nervonic-acid_100g]',
    }),
    nitrate_100g: createAttribute({
        name: 'nitrate_100g',
        type: 'text-attribute',
        expression: '[data.nitrate_100g]',
    }),
    no_nutrition_data: createAttribute({
        name: 'no_nutrition_data',
        type: 'text-attribute',
        expression: '[data.no_nutrition_data]',
    }),
    nova_group: createAttribute({
        name: 'nova_group',
        type: 'numeric-attribute',
        expression: '[data.nova_group]',
    }),
    nucleotides_100g: createAttribute({
        name: 'nucleotides_100g',
        type: 'text-attribute',
        expression: '[data.nucleotides_100g]',
    }),
    nutrient_levels_tags: createAttribute({
        name: 'nutrient_levels_tags',
        type: 'text-attribute',
        expression: '[data.nutrient_levels_tags]',
    }),
    nutriscore_grade: createAttribute({
        name: 'nutriscore_grade',
        type: 'text-attribute',
        expression: '[data.nutriscore_grade]',
    }),
    nutriscore_score: createAttribute({
        name: 'nutriscore_score',
        type: 'numeric-attribute',
        expression: '[data.nutriscore_score]',
    }),
    nutritionscorefr_100g: createAttribute({
        name: 'nutritionscorefr_100g',
        type: 'numeric-attribute',
        expression: '[data.nutrition-score-fr_100g]',
    }),
    nutritionscoreuk_100g: createAttribute({
        name: 'nutritionscoreuk_100g',
        type: 'text-attribute',
        expression: '[data.nutrition-score-uk_100g]',
    }),
    oleicacid_100g: createAttribute({
        name: 'oleicacid_100g',
        type: 'text-attribute',
        expression: '[data.oleic-acid_100g]',
    }),
    omega3fat_100g: createAttribute({
        name: 'omega3fat_100g',
        type: 'text-attribute',
        expression: '[data.omega-3-fat_100g]',
    }),
    omega6fat_100g: createAttribute({
        name: 'omega6fat_100g',
        type: 'text-attribute',
        expression: '[data.omega-6-fat_100g]',
    }),
    omega9fat_100g: createAttribute({
        name: 'omega9fat_100g',
        type: 'text-attribute',
        expression: '[data.omega-9-fat_100g]',
    }),
    origins: createAttribute({
        name: 'origins',
        type: 'text-attribute',
        expression: '[data.origins]',
    }),
    origins_en: createAttribute({
        name: 'origins_en',
        type: 'text-attribute',
        expression: '[data.origins_en]',
    }),
    origins_tags: createAttribute({
        name: 'origins_tags',
        type: 'text-attribute',
        expression: '[data.origins_tags]',
    }),
    owner: createAttribute({
        name: 'owner',
        type: 'text-attribute',
        expression: '[data.owner]',
    }),
    packaging: createAttribute({
        name: 'packaging',
        type: 'text-attribute',
        expression: '[data.packaging]',
    }),
    packaging_en: createAttribute({
        name: 'packaging_en',
        type: 'text-attribute',
        expression: '[data.packaging_en]',
    }),
    packaging_tags: createAttribute({
        name: 'packaging_tags',
        type: 'text-attribute',
        expression: '[data.packaging_tags]',
    }),
    packaging_text: createAttribute({
        name: 'packaging_text',
        type: 'text-attribute',
        expression: '[data.packaging_text]',
    }),
    palmiticacid_100g: createAttribute({
        name: 'palmiticacid_100g',
        type: 'text-attribute',
        expression: '[data.palmitic-acid_100g]',
    }),
    pantothenicacid_100g: createAttribute({
        name: 'pantothenicacid_100g',
        type: 'text-attribute',
        expression: '[data.pantothenic-acid_100g]',
    }),
    ph_100g: createAttribute({
        name: 'ph_100g',
        type: 'text-attribute',
        expression: '[data.ph_100g]',
    }),
    phosphorus_100g: createAttribute({
        name: 'phosphorus_100g',
        type: 'text-attribute',
        expression: '[data.phosphorus_100g]',
    }),
    phylloquinone_100g: createAttribute({
        name: 'phylloquinone_100g',
        type: 'text-attribute',
        expression: '[data.phylloquinone_100g]',
    }),
    pnns_groups_1: createAttribute({
        name: 'pnns_groups_1',
        type: 'text-attribute',
        expression: '[data.pnns_groups_1]',
    }),
    pnns_groups_2: createAttribute({
        name: 'pnns_groups_2',
        type: 'text-attribute',
        expression: '[data.pnns_groups_2]',
    }),
    polyols_100g: createAttribute({
        name: 'polyols_100g',
        type: 'text-attribute',
        expression: '[data.polyols_100g]',
    }),
    polyunsaturatedfat_100g: createAttribute({
        name: 'polyunsaturatedfat_100g',
        type: 'text-attribute',
        expression: '[data.polyunsaturated-fat_100g]',
    }),
    popularity_tags: createAttribute({
        name: 'popularity_tags',
        type: 'text-attribute',
        expression: '[data.popularity_tags]',
    }),
    potassium_100g: createAttribute({
        name: 'potassium_100g',
        type: 'text-attribute',
        expression: '[data.potassium_100g]',
    }),
    product_name: createAttribute({
        name: 'product_name',
        type: 'text-attribute',
        expression: '[data.product_name]',
    }),
    product_quantity: createAttribute({
        name: 'product_quantity',
        type: 'numeric-attribute',
        expression: '[data.product_quantity]',
    }),
    proteins_100g: createAttribute({
        name: 'proteins_100g',
        type: 'numeric-attribute',
        expression: '[data.proteins_100g]',
    }),
    purchase_places: createAttribute({
        name: 'purchase_places',
        type: 'text-attribute',
        expression: '[data.purchase_places]',
    }),
    quantity: createAttribute({
        name: 'quantity',
        type: 'text-attribute',
        expression: '[data.quantity]',
    }),
    salt_100g: createAttribute({
        name: 'salt_100g',
        type: 'numeric-attribute',
        expression: '[data.salt_100g]',
    }),
    saturatedfat_100g: createAttribute({
        name: 'saturatedfat_100g',
        type: 'numeric-attribute',
        expression: '[data.saturated-fat_100g]',
    }),
    selenium_100g: createAttribute({
        name: 'selenium_100g',
        type: 'text-attribute',
        expression: '[data.selenium_100g]',
    }),
    serumproteins_100g: createAttribute({
        name: 'serumproteins_100g',
        type: 'text-attribute',
        expression: '[data.serum-proteins_100g]',
    }),
    serving_quantity: createAttribute({
        name: 'serving_quantity',
        type: 'numeric-attribute',
        expression: '[data.serving_quantity]',
    }),
    serving_size: createAttribute({
        name: 'serving_size',
        type: 'text-attribute',
        expression: '[data.serving_size]',
    }),
    silica_100g: createAttribute({
        name: 'silica_100g',
        type: 'text-attribute',
        expression: '[data.silica_100g]',
    }),
    sodium_100g: createAttribute({
        name: 'sodium_100g',
        type: 'numeric-attribute',
        expression: '[data.sodium_100g]',
    }),
    solublefiber_100g: createAttribute({
        name: 'solublefiber_100g',
        type: 'text-attribute',
        expression: '[data.soluble-fiber_100g]',
    }),
    starch_100g: createAttribute({
        name: 'starch_100g',
        type: 'text-attribute',
        expression: '[data.starch_100g]',
    }),
    states: createAttribute({
        name: 'states',
        type: 'text-attribute',
        expression: '[data.states]',
    }),
    states_en: createAttribute({
        name: 'states_en',
        type: 'text-attribute',
        expression: '[data.states_en]',
    }),
    states_tags: createAttribute({
        name: 'states_tags',
        type: 'text-attribute',
        expression: '[data.states_tags]',
    }),
    stearicacid_100g: createAttribute({
        name: 'stearicacid_100g',
        type: 'text-attribute',
        expression: '[data.stearic-acid_100g]',
    }),
    stores: createAttribute({
        name: 'stores',
        type: 'text-attribute',
        expression: '[data.stores]',
    }),
    sucrose_100g: createAttribute({
        name: 'sucrose_100g',
        type: 'text-attribute',
        expression: '[data.sucrose_100g]',
    }),
    sugars_100g: createAttribute({
        name: 'sugars_100g',
        type: 'numeric-attribute',
        expression: '[data.sugars_100g]',
    }),
    sulphate_100g: createAttribute({
        name: 'sulphate_100g',
        type: 'text-attribute',
        expression: '[data.sulphate_100g]',
    }),
    taurine_100g: createAttribute({
        name: 'taurine_100g',
        type: 'text-attribute',
        expression: '[data.taurine_100g]',
    }),
    traces: createAttribute({
        name: 'traces',
        type: 'text-attribute',
        expression: '[data.traces]',
    }),
    traces_en: createAttribute({
        name: 'traces_en',
        type: 'text-attribute',
        expression: '[data.traces_en]',
    }),
    traces_tags: createAttribute({
        name: 'traces_tags',
        type: 'text-attribute',
        expression: '[data.traces_tags]',
    }),
    transfat_100g: createAttribute({
        name: 'transfat_100g',
        type: 'numeric-attribute',
        expression: '[data.trans-fat_100g]',
    }),
    unique_scans_n: createAttribute({
        name: 'unique_scans_n',
        type: 'numeric-attribute',
        expression: '[data.unique_scans_n]',
    }),
    unsaturatedfat_100g: createAttribute({
        name: 'unsaturatedfat_100g',
        type: 'text-attribute',
        expression: '[data.unsaturated-fat_100g]',
    }),
    url: createAttribute({
        name: 'url',
        type: 'text-attribute',
        expression: '[data.url]',
    }),
    vitamina_100g: createAttribute({
        name: 'vitamina_100g',
        type: 'numeric-attribute',
        expression: '[data.vitamin-a_100g]',
    }),
    vitaminb12_100g: createAttribute({
        name: 'vitaminb12_100g',
        type: 'text-attribute',
        expression: '[data.vitamin-b12_100g]',
    }),
    vitaminb1_100g: createAttribute({
        name: 'vitaminb1_100g',
        type: 'text-attribute',
        expression: '[data.vitamin-b1_100g]',
    }),
    vitaminb2_100g: createAttribute({
        name: 'vitaminb2_100g',
        type: 'text-attribute',
        expression: '[data.vitamin-b2_100g]',
    }),
    vitaminb6_100g: createAttribute({
        name: 'vitaminb6_100g',
        type: 'text-attribute',
        expression: '[data.vitamin-b6_100g]',
    }),
    vitaminb9_100g: createAttribute({
        name: 'vitaminb9_100g',
        type: 'text-attribute',
        expression: '[data.vitamin-b9_100g]',
    }),
    vitaminc_100g: createAttribute({
        name: 'vitaminc_100g',
        type: 'numeric-attribute',
        expression: '[data.vitamin-c_100g]',
    }),
    vitamind_100g: createAttribute({
        name: 'vitamind_100g',
        type: 'text-attribute',
        expression: '[data.vitamin-d_100g]',
    }),
    vitamine_100g: createAttribute({
        name: 'vitamine_100g',
        type: 'text-attribute',
        expression: '[data.vitamin-e_100g]',
    }),
    vitamink_100g: createAttribute({
        name: 'vitamink_100g',
        type: 'text-attribute',
        expression: '[data.vitamin-k_100g]',
    }),
    vitaminpp_100g: createAttribute({
        name: 'vitaminpp_100g',
        type: 'text-attribute',
        expression: '[data.vitamin-pp_100g]',
    }),
    waterhardness_100g: createAttribute({
        name: 'waterhardness_100g',
        type: 'text-attribute',
        expression: '[data.water-hardness_100g]',
    }),
    zinc_100g: createAttribute({
        name: 'zinc_100g',
        type: 'text-attribute',
        expression: '[data.zinc_100g]',
    }),
    created_datetime: createDateDimension({
        name: 'created_datetime',
        expression: '[data.created_datetime (Calendar)]',
    }),
    last_image_datetime: createDateDimension({
        name: 'last_image_datetime',
        expression: '[data.last_image_datetime (Calendar)]',
    }),
    last_modified_datetime: createDateDimension({
        name: 'last_modified_datetime',
        expression: '[data.last_modified_datetime (Calendar)]',
    }),
    last_updated_datetime: createDateDimension({
        name: 'last_updated_datetime',
        expression: '[data.last_updated_datetime (Calendar)]',
    }),
}) as dataDimension;
