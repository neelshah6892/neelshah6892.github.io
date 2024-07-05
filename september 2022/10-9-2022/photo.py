import os

def get_filenames_from_directory(directory, suffix=''):
    try:
        # List all files in the given directory
        filenames = os.listdir(directory)
        # Add suffix to each filename
        filenames_with_suffix = [os.path.join(suffix, filename) for filename in filenames]
        return filenames_with_suffix
    except Exception as e:
        print(f"Error: {e}")
        return []

def split_array_into_three_parts(array):
    # Calculate the size of each part
    part_size = len(array) // 3
    remainder = len(array) % 3

    # Create three parts
    part1 = array[:part_size + (1 if remainder > 0 else 0)]
    part2 = array[part_size + (1 if remainder > 0 else 0) : 2 * part_size + (1 if remainder > 1 else 0)]
    part3 = array[2 * part_size + (1 if remainder > 1 else 0):]

    return part1, part2, part3

# Specify the directory and suffix
directory = 'D:\VS Code\Web Dev\love\login\october 2022\\17-10-2022\\photos'
suffix = 'photos/'

# Get the filenames
filenames = get_filenames_from_directory(directory, suffix)

# Split the filenames into three parts
part1, part2, part3 = split_array_into_three_parts(filenames)

# Print the parts
print("Part 1:", part1)
print("Part 2:", part2)
print("Part 3:", part3)
