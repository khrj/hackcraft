{
	inputs = {
		nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";
		flake-utils.url = "github:numtide/flake-utils";
	};

	outputs = { self, nixpkgs, flake-utils }:
		flake-utils.lib.eachDefaultSystem (system:
			let pkgs = nixpkgs.legacyPackages.${system};
			in {
				devShell = pkgs.mkShell {
					buildInputs = with pkgs; [
						nodejs-19_x
					];
				};
			}
		);
}
