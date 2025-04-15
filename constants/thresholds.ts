export type Threshold = {
    temperature: { min: number; max: number };
    humidity: { min: number; max: number };
};

export type AnimalType = "dog" | "cat";
export type BreedMap = Record<string, Threshold>;

export const defaultThresholds: Record<AnimalType, Threshold> = {
    dog: { temperature: { min: 18, max: 25 }, humidity: { min: 30, max: 60 } },
    cat: { temperature: { min: 18, max: 26 }, humidity: { min: 40, max: 70 } },
};

export const breedThresholds: Record<AnimalType, BreedMap> = {
    dog: {
        "Labrador Retriever": { temperature: { min: 10, max: 26 }, humidity: { min: 30, max: 60 } },
        "Golden Retriever": { temperature: { min: 10, max: 25 }, humidity: { min: 30, max: 60 } },
        "French Bulldog": { temperature: { min: 15, max: 22 }, humidity: { min: 30, max: 50 } },
        "German Shepherd": { temperature: { min: 10, max: 24 }, humidity: { min: 30, max: 60 } },
        "Bulldog": { temperature: { min: 15, max: 22 }, humidity: { min: 30, max: 50 } },
        "Poodle": { temperature: { min: 10, max: 25 }, humidity: { min: 30, max: 60 } },
        "Beagle": { temperature: { min: 10, max: 26 }, humidity: { min: 30, max: 60 } },
        "Dachshund": { temperature: { min: 15, max: 25 }, humidity: { min: 30, max: 60 } },
        "Siberian Husky": { temperature: { min: -5, max: 20 }, humidity: { min: 20, max: 50 } },
        "Bichon Maltese": { temperature: { min: 15, max: 24 }, humidity: { min: 30, max: 60 } },
    },
    cat: {
        "Persian": { temperature: { min: 18, max: 24 }, humidity: { min: 30, max: 50 } },
        "Maine Coon": { temperature: { min: 10, max: 24 }, humidity: { min: 30, max: 60 } },
        "Ragdoll": { temperature: { min: 18, max: 25 }, humidity: { min: 30, max: 60 } },
        "British Shorthair": { temperature: { min: 18, max: 25 }, humidity: { min: 30, max: 60 } },
        "Siamese": { temperature: { min: 18, max: 26 }, humidity: { min: 30, max: 60 } },
        "Sphynx": { temperature: { min: 20, max: 28 }, humidity: { min: 30, max: 50 } },
        "Bengal": { temperature: { min: 18, max: 26 }, humidity: { min: 30, max: 60 } },
        "American Shorthair": { temperature: { min: 18, max: 26 }, humidity: { min: 30, max: 60 } },
        "Abyssinian": { temperature: { min: 18, max: 26 }, humidity: { min: 30, max: 60 } },
        "Scottish Fold": { temperature: { min: 18, max: 25 }, humidity: { min: 30, max: 60 } },
    },
};