import type { Dimension, DateDimension, Attribute, DataSourceInfo } from '@sisense/sdk-data';

import { createAttribute, createDateDimension, createDimension } from '@sisense/sdk-data';

export const DataSource: DataSourceInfo = { title: 'IG', type: 'elasticube' };

interface dataDimension extends Dimension {
    barcode: Attribute;
    brand: Attribute;
    calcium: Attribute;
    calories: Attribute;
    carbohydrates: Attribute;
    category: Attribute;
    fat: Attribute;
    fiber: Attribute;
    iron: Attribute;
    data_name: Attribute;
    protein: Attribute;
    sodium: Attribute;
    sugar: Attribute;
    vitamin_c: Attribute;
}
export const data = createDimension({
    name: 'data',
    barcode: createAttribute({
        name: 'barcode',
        type: 'numeric-attribute',
        expression: '[data.barcode]',
    }),
    brand: createAttribute({
        name: 'brand',
        type: 'text-attribute',
        expression: '[data.brand]',
    }),
    calcium: createAttribute({
        name: 'calcium',
        type: 'numeric-attribute',
        expression: '[data.calcium]',
    }),
    calories: createAttribute({
        name: 'calories',
        type: 'numeric-attribute',
        expression: '[data.calories]',
    }),
    carbohydrates: createAttribute({
        name: 'carbohydrates',
        type: 'numeric-attribute',
        expression: '[data.carbohydrates]',
    }),
    category: createAttribute({
        name: 'category',
        type: 'text-attribute',
        expression: '[data.category]',
    }),
    fat: createAttribute({
        name: 'fat',
        type: 'numeric-attribute',
        expression: '[data.fat]',
    }),
    fiber: createAttribute({
        name: 'fiber',
        type: 'numeric-attribute',
        expression: '[data.fiber]',
    }),
    iron: createAttribute({
        name: 'iron',
        type: 'numeric-attribute',
        expression: '[data.iron]',
    }),
    data_name: createAttribute({
        name: 'data_name',
        type: 'text-attribute',
        expression: '[data.name]',
    }),
    protein: createAttribute({
        name: 'protein',
        type: 'numeric-attribute',
        expression: '[data.protein]',
    }),
    sodium: createAttribute({
        name: 'sodium',
        type: 'numeric-attribute',
        expression: '[data.sodium]',
    }),
    sugar: createAttribute({
        name: 'sugar',
        type: 'numeric-attribute',
        expression: '[data.sugar]',
    }),
    vitamin_c: createAttribute({
        name: 'vitamin_c',
        type: 'numeric-attribute',
        expression: '[data.vitamin_c]',
    }),
}) as dataDimension;
